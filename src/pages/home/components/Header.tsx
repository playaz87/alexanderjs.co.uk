import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackArrow } from '../../../common/components/BackArrow';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <InnerContainer>
        {pathname !== '/' && <BackArrow />}
        {pathname === '/' && <div />}

        <Socials>
          <Logo onClick={() => navigate('/')} />
          <Social $src={'github'} onClick={() => window.open('https://github.com/playaz87', '_blank')} />
          <Social $src={'linkedin'} onClick={() => window.open('https://www.linkedin.com/in/alexander-sommerville-8b2296225/', '_blank')} />
        </Socials>
      </InnerContainer>
    </Container>
  );
};

const collapse = keyframes`
    from {
        height: 240px;
        font-size: 0.8rem;
    }
    to {
        height: 90px;
    }
`;

const collapseMobile = keyframes`
    0% {
        height: 200px;
        font-size: 0.8rem;
    }
    10% {
        height: 90px;
    }
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 101;
  height: var(--_header-height);
`;

const Logo = styled.div`
  width: 6rem;
  height: 3rem;
  mask: url('/icons/ajs.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--text-accent);
  cursor: pointer;
`;

const InnerContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-2);
  color: white;
  padding: 2em;
  font-size: 0.6rem;
  position: relative;
  text-align: center;

  // @supports (animation-timeline: scroll()) {
  //   animation: ${collapse} linear;
  //   animation-timeline: scroll(block root);
  // }
  //
  @media screen and (max-width: 800px) {
    font-size: 0.4rem;

    // @supports (animation-timeline: scroll()) {
    //   animation: ${collapseMobile} linear;
    //   animation-timeline: scroll(block root);
    // }
  }
  @media screen and (max-width: 420px) {
    font-size: 0.3rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: inherit;

  > div:nth-of-type(1) {
    font-size: 4em;
  }

  > div:nth-of-type(2) {
    font-size: 3em;
  }

  //@media screen and (max-width: 800px) {
  //  > div:first-of-type {
  //    font-size: 1.6em;
  //  }
  //
  //  > div:last-of-type {
  //    font-size: 1.5em;
  //  }
  //}
  //
  //@media screen and (max-width: 500px) {
  //  > div:first-of-type {
  //    font-size: 1.4em;
  //  }
  //
  //  > div:last-of-type {
  //    font-size: 1.3em;
  //  }
  //}
  //
  //@media screen and (max-width: 400px) {
  //  > div:first-of-type {
  //    font-size: 1em;
  //  }
  //
  //  > div:last-of-type {
  //    font-size: 0.8em;
  //  }
  //}
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const Social = styled.div<{ $src: string }>`
  width: 2rem;
  height: 2rem;
  mask: url('/icons/${props => props.$src}.svg');
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: var(--text-accent);
`;
