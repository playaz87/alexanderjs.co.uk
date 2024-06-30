import React from 'react';
import styled from 'styled-components';
import { PhoneFrame } from '../../common/components/PhoneFrame';

export type Platform = 'ios' | 'android';

export const Td2Layout = (): React.ReactElement => {
  const handleQrClick = (platform: Platform) => {
    let url = 'https://apps.apple.com/us/app/tome-of-d2/id1446555252';
    if (platform === 'android') {
      url = 'https://play.google.com/store/apps/details?id=uk.co.alexanderjs.runewordhelper';
    }
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Header>Tome of D2</Header>
      <Description>
        <p>Originally built with Angular, Ionic 3 and Cordova. The latest version is built with Ionic 7, React 18 and Capacitor.</p>
        <p>
          Features include:
          <ul>
            <li>Automatic OTA updates</li>
            <li>Local SQLite database</li>
            <li>Trading platform (Spring Boot + MySQL)</li>
          </ul>
        </p>
      </Description>
      <PhoneWrap>
        <PhoneFrame src={'https://td2.alexanderjs.co.uk'} />
      </PhoneWrap>
      <QrWrap>
        <Qr $platform={'android'} onClick={() => handleQrClick('android')} />
        <Qr $platform={'ios'} onClick={() => handleQrClick('ios')} />
      </QrWrap>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;
  background-color: var(--bg-1);
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--accent);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PhoneWrap = styled.div`
  min-height: 700px;
`;

export const QrWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Qr = styled.div<{ $platform: Platform }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    background-image: url('/icons/${props => props.$platform}_logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:after {
    content: '';
    width: 15rem;
    height: 15rem;
    background-image: url('/icons/td2_${props => props.$platform}_qr.png');
    background-size: cover;
  }
`;
