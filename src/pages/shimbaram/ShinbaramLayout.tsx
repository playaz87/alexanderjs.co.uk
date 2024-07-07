import React from 'react';
import { PhoneFrame } from '../../common/components/PhoneFrame';
import styled from 'styled-components';
import { DemoDescription, DemoHeader, DemoPhoneWrap, DemoQr, DemoQrWrap } from '../td2/Td2Layout';
import { PageContainer } from '../home/HomeLayout';

export const ShinbaramLayout = (): React.ReactElement => {
  const handleQrClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.uos.project_new_windy&hl=en', '_blank');
  };

  return (
    <Container>
      <DemoHeader>Shinbaram</DemoHeader>
      <DemoDescription>
        <p>
          Shinbaram is a secondhand marketplace hybrid app for agricultural products in Korea. Built with Ionic 7, React 18, graphQL and
          Capacitor.
        </p>
        <p>
          Features include:
          <ul>
            <li>Automatic OTA updates</li>
            <li>Real time chat with websockets</li>
          </ul>
        </p>
      </DemoDescription>
      <DemoPhoneWrap>
        <PhoneFrame src={'https://mobile.신바람.com'} />
      </DemoPhoneWrap>
      <DemoQrWrap>
        <ShirnbaramQr $platform={'android'} onClick={handleQrClick} />
      </DemoQrWrap>
    </Container>
  );
};

const Container = styled(PageContainer)`
  align-items: center;
`;

const ShirnbaramQr = styled(DemoQr)`
  &:after {
    background-image: url('/icons/shinbaram_${props => props.$platform}_qr.png');
  }
`;
