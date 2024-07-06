import React from 'react';
import styled from 'styled-components';

export const FlexCol: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

interface Props {
  $align: 'flex-start' | 'center' | 'flex-end';
  $justify?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
  $width?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  $gap?: string;
  height?: string;
  className?: string;
}

const Component = styled('div')<{
  $align: string;
  $width?: string;
  $gap?: string;
  $justify?: string;
  $height?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$align};
  justify-content: ${props => props.$justify};
  width: ${props => props.$width ?? 'auto'};
  gap: ${props => props.$gap ?? 'unset'};
  height: ${props => props.$height};
`;
