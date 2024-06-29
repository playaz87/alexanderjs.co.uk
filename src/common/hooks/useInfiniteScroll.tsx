import React, { useEffect, useRef } from 'react';
import { Spinner } from '../components/Spinner';
import styled from 'styled-components';

export const useInfiniteScroll = (scrollContainer: React.RefObject<HTMLElement>, onInfinite: () => void, isComplete: boolean) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainer.current) return;
    observer.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onInfinite();
            break;
          }
        }
      },
      { threshold: 0.5, root: scrollContainer.current },
    );

    observer.current.observe(target.current!);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [scrollContainer, onInfinite]);

  useEffect(() => {
    if (isComplete && observer.current) {
      observer.current.disconnect();
    }
  }, [isComplete]);

  return (
    <Container ref={target}>
      {!isComplete && (
        <>
          Loading...
          <Spinner $size={'5rem'} />
        </>
      )}
    </Container>
  );
};

//@formatter:off
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.2rem;
  color: var(--accent);

  //@container (inline-size > calc(10rem * 2 + 2rem)) {
  //  grid-column: span 2;
  //}
  //
  //@container (inline-size > calc(10rem * 3 + 4rem)) {
  //  grid-column: span 3;
  //}
  //
  //@container (inline-size > calc(10rem * 4 + 6rem)) {
  //  grid-column: span 4;
  //}
  //
  //@container (inline-size > calc(10rem * 5 + 8rem)) {
  //  grid-column: span 5;
  //}
  //
  //@container (inline-size > calc(10rem * 6 + 10rem)) {
  //  grid-column: span 6;
  //}
  //
  //@container (inline-size > calc(10rem * 7 + 12rem)) {
  //  grid-column: span 7;
  //}
`;
