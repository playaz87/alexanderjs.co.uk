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
          <Social $src={'github'} href={'https://github.com/playaz87'} target={'_blank'} rel={'noreferrer noopener'} />
          <Social
            $src={'linkedin'}
            href={'https://www.linkedin.com/in/alexander-sommerville-8b2296225/'}
            target={'_blank'}
            rel={'noreferrer noopener'}
          />
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
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 101;
  height: var(--_header-height);
  //outline: 1px solid hotpink;
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
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const Social = styled.a<{ $src: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 8px;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    mask: url('/icons/${props => props.$src}.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--text-accent);
    display: block;
  }

  &:focus {
    filter: drop-shadow(11px 2px #ddc1c1);
  }

  &:focus-visible {
    outline: none;
  }
`;
