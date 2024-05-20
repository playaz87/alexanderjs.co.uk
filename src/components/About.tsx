import React from 'react';
import styled from "styled-components";


export const About: React.FC = () => {
  return (
    <>
      <Row $icon={'phone'}>+82-10-9415-2947</Row>
      <Row $icon={'mail'}>dev.ajsoftware@gmail.com</Row>
      <Row $icon={'map'}>British</Row>
      <Row $icon={'github'}>
        <a href="http://github.com/playaz87">Github</a>
      </Row>
    </>
  );
};

const Row = styled.div<{$icon: string}>`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    &:before {
        content: '';
        width: 1rem;
        height: 1rem;
        background-image: url("/icons/${props => props.$icon}.svg");
        background-size: cover;
    }
    
    > a {
        text-decoration: none;
    }
`;