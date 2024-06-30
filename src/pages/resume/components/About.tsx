import React from 'react';
import styled from 'styled-components';

export const About: React.FC = () => {
  return (
    <>
      <Row $icon={'phone'}>
        <span>+</span>
        <span>8</span>
        <span>2</span>
        <span>-</span>
        <span>1</span>
        <span>0</span>
        <span>-</span>
        <span>9</span>
        <span>4</span>
        <span>1</span>
        <span>5</span>
        <span>-</span>
        <span>2</span>
        <span>9</span>
        <span>4</span>
        <span>7</span>
      </Row>
      <Row $icon={'mail'}>dev.ajsoftware@gmail.com</Row>
      <Row $icon={'map'}>British</Row>
      <Row $icon={'github'}>
        <a href='http://github.com/playaz87' target={'_blank'}>
          Github
        </a>
      </Row>
    </>
  );
};

const Row = styled.div<{ $icon: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    background-image: url('/icons/${props => props.$icon}.svg');
    background-size: cover;
  }

  > a {
    text-decoration: none;
  }

  > span:not(:first-of-type) {
    margin-left: -1rem;
  }
`;
