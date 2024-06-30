import React from 'react';
import styled from 'styled-components';
import { DissolveOverlay } from './DissolveOverlay';

interface Props {
  src: string;
}

export const PhoneFrame: React.FC<Props> = ({ src }) => {
  return (
    <Phone>
      <IframeWrap>
        <DissolveOverlay cols={10} rows={30} hint={'Click me'} />
        <Iframe src={src} />
      </IframeWrap>
    </Phone>
  );
};

const Phone = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 710px;
  display: flex;
  flex-direction: column;
  border-left: 12px solid black;
  border-right: 12px solid black;
  border-top: 40px solid black;
  border-bottom: 70px solid black;
  border-radius: 30px;
  position: relative;
  grid-area: phone;

  &:before,
  &:after {
    content: '';
    background-color: #9f9f9f;
    display: block;
    position: absolute;
  }

  &:before {
    width: 30%;
    height: 6px;
    border-radius: 10000px;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-23px);
  }

  &:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) translateY(55px);
  }

  @media print {
    display: none;
  }
`;

const IframeWrap = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  border: none;
`;
