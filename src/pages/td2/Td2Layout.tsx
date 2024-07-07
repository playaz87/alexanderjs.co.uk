import React from 'react';
import styled from 'styled-components';
import { PhoneFrame } from '../../common/components/PhoneFrame';
import { PageContainer } from '../home/HomeLayout';

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
      <DemoHeader>Tome of D2</DemoHeader>
      <DemoDescription>
        <p>Originally built with Angular, Ionic 3 and Cordova. The latest version is built with Ionic 7, React 18 and Capacitor.</p>
        <p>
          Features include:
          <ul>
            <li>Automatic OTA updates</li>
            <li>Local SQLite database</li>
            <li>Trading platform (Spring Boot + MySQL)</li>
          </ul>
        </p>
      </DemoDescription>
      <DemoPhoneWrap>
        <PhoneFrame src={'https://td2.alexanderjs.co.uk'} />
      </DemoPhoneWrap>
      <DemoQrWrap>
        <DemoQr $platform={'android'} onClick={() => handleQrClick('android')} />
        <DemoQr $platform={'ios'} onClick={() => handleQrClick('ios')} />
      </DemoQrWrap>
    </Container>
  );
};

const Container = styled(PageContainer)`
  align-items: center;
`;

export const DemoHeader = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

export const DemoDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DemoPhoneWrap = styled.div`
  min-height: 700px;
`;

export const DemoQrWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const DemoQr = styled.div<{ $platform: Platform }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    mask: url('/icons/${props => props.$platform}.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: white;
  }

  &:after {
    content: '';
    width: 15rem;
    height: 15rem;
    background-image: url('/icons/td2_${props => props.$platform}_qr.png');
    background-size: cover;
  }
`;
