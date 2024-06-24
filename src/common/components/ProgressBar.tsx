import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  percent: number;
  color: string;
  label: string | number;
}

export const ProgressBar: React.FC<Props> = ({ percent, color, label }) => {
  return (
    <Container>
      <Bar $width={percent} $color={color}>
        <div>{label}</div>
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #e9ecef;
`;

const stripes = keyframes`
	from {
		background-position: 1rem 0;
	}
	to {
		background-position: 0 0;
	}
`;

const Bar = styled.div<{ $width: number; $color: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-inline: 1rem;
  height: 100%;
  width: ${props => props.$width}%;
  background-color: ${props => props.$color};
  background-image: linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.15) 25%,
    transparent 0,
    transparent 50%,
    hsla(0, 0%, 100%, 0.15) 0,
    hsla(0, 0%, 100%, 0.15) 75%,
    transparent 0,
    transparent
  );
  background-size: 1rem 1rem;
  animation: ${stripes} 1s linear infinite;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: width 0.3s ease;
  font-size: 0.8rem;
  color: white;
`;
