import React from 'react';
import styled, {keyframes} from "styled-components";

export const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>Alexander Sommerville</div>
        <div>React Developer</div>
        <a href="https://github.com/playaz87/alexanderjs.co.uk" className={'no-print'}>See the code for this page here!</a>
      </Wrapper>
    </Container>
  );
};

const collapse = keyframes`
    from {
        height: 240px;
        font-size: 0.8rem;
    }
    to {
        height: 80px;
    }
`;

const collapseMobile = keyframes`
    0% {
        height: 200px;
        font-size: 0.8rem;
    }
    10% {
        height: 80px;
    }
`;

const Container = styled.div`
    z-index: 10;
    @supports (animation-timeline: scroll()) {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
    }
`;

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--accent);
    color: white;
    padding: 2em;
    font-size: 0.4rem;
    position: relative;

    @supports (animation-timeline: scroll()) {
        animation: ${collapse} linear;
        animation-timeline: scroll(block root);
        
    }

    > div:first-of-type {
        font-size: 4em;
    }

    > div:last-of-type {
        font-size: 3em;
    }

    > a {
        position: absolute;
        right: 1em;
        bottom: 2em;
        color: wheat;
        text-decoration: none;
        font-size: 1.6em;
    }
    
    @media screen and (max-width: 800px){
        font-size: 0.8rem;
        
        @supports (animation-timeline: scroll()) {
            animation: ${collapseMobile} linear;
            animation-timeline: scroll(block root);

        }
        
        > div:first-of-type {
            font-size: 2em;
        }

        > div:last-of-type {
            font-size: 1.5em;
        }

        > a {
            position: absolute;
            right: 1em;
            bottom: 2em;
            color: wheat;
            text-decoration: none;
            font-size: 0.8em;
        }
    }
    
`;
