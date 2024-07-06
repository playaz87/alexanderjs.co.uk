import React from 'react';
import styled from 'styled-components';

export const IntroCard = (): React.ReactElement => {
  return (
    <Card>
      <h1>Alex Sommerville</h1>
      <h2>Frontend Developer</h2>
      <p>I build pixel-perfect, engaging, and accessible web apps.</p>
      <Socials>
        <Social $src={'github'} onClick={() => window.open('https://github.com/playaz87', '_blank')} />
        <Social $src={'linkedin'} onClick={() => window.open('https://www.linkedin.com/in/alexander-sommerville-8b2296225/', '_blank')} />
      </Socials>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  text-wrap: pretty;

  > p {
    color: rgb(87, 211, 234);
  }

  > h2,
  h3 {
    margin-top: 0;
  }
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
