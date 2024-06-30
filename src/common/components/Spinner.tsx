import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ $size: string }>`
  min-width: ${props => props.$size};
  max-width: ${props => props.$size};
  min-height: ${props => props.$size};
  max-height: ${props => props.$size};
  border-radius: 50%;
  border: ${props => `calc(${props.$size} / 10)`} solid #f3f3f3;
  border-top: ${props => `calc(${props.$size} / 10)`} solid var(--accent);
  border-left: ${props => `calc(${props.$size} / 10)`} solid var(--accent);
  border-bottom: ${props => `calc(${props.$size} / 10)`} solid var(--accent);
  animation: ${spin} 1.4s linear infinite;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
`;
