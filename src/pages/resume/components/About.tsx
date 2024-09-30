import React from 'react';
import styled from 'styled-components';

export const About: React.FC = () => {
  return (
    <>
      <Row $icon={'mail'}>
        <ATSLabel>Email:</ATSLabel>
        dev.ajsoftware@gmail.com
      </Row>
      <Row $icon={'map'}>
        <ATSLabel>Nationality</ATSLabel>
        British
      </Row>
      <Row $icon={'home_page'}>
        <ATSLabel>Portfolio:</ATSLabel>
        <a href='https://alexjs.uk' target={'_blank'} rel='noreferrer'>
          alexjs.uk
        </a>
      </Row>
      <Row $icon={'github'}>
        <ATSLabel>Github:</ATSLabel>
        <a href='https://github.com/playaz87' target={'_blank'} rel='noreferrer'>
          Github
        </a>
      </Row>
      <Row $icon={'university'}>
        <ATSLabel>Education:</ATSLabel>
        BSc Biology
      </Row>
    </>
  );
};

const Row = styled.div<{ $icon: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    mask: url('/icons/${props => props.$icon}.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--accent);
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    &:after {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      mask: url('/icons/link.svg');
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;
      background-color: var(--accent);
    }
  }

  > span:not(:first-of-type) {
    margin-left: -1rem;
  }
`;

const ATSLabel = styled.label`
  position: absolute;
  left: -200vw;
`;
