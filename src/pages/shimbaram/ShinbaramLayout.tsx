import React from 'react';
import { PhoneFrame } from '../../common/components/PhoneFrame';
import styled from 'styled-components';
import { PhoneWrap, Qr, QrWrap } from '../td2/Td2Layout';

export const ShinbaramLayout = (): React.ReactElement => {
  const handleQrClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.uos.project_new_windy&hl=en', '_blank');
  };

  return (
    <Container>
      <Header>Shinbaram</Header>
      <Description>
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
      </Description>
      <PhoneWrap>
        <PhoneFrame src={'https://mobile.신바람.com'} />
      </PhoneWrap>
      <QrWrap>
        <ShirnbaramQr $platform={'android'} onClick={handleQrClick} />
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
  text-wrap: pretty;
`;

const ShirnbaramQr = styled(Qr)`
  &:after {
    background-image: url('/icons/shinbaram_${props => props.$platform}_qr.png');
  }
`;
