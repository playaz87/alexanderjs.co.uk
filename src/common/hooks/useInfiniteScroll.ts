import React, { useEffect, useRef } from 'react';

export const useInfiniteScroll = (scrollContainer: React.RefObject<HTMLElement>, onInfinite: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!scrollContainer.current) return;
    observer.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          console.log(entry);
          if (entry.isIntersecting) {
            onInfinite();
            break;
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.current.observe(scrollContainer.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [scrollContainer, onInfinite]);
};
