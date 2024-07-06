import React, { forwardRef } from 'react';
import styled from 'styled-components';

// export const FlexRow: React.FC<Props> = ({ children, ...rest }) => {
//   return <Component {...rest}>{children}</Component>;
// };

export const FlexRow = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

FlexRow.displayName = 'FlexRow';

interface Props {
  $justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around';
  $align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  $width?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  $gap?: string;
  id?: string;
}

const Component = styled('div')<{ $justify?: string; $align?: string; $width?: string; $gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.$align ? props.$align : 'center')};
  justify-content: ${props => (props.$justify ? props.$justify : 'center')};
  width: ${props => props.$width ?? '100%'};
  gap: ${props => props.$gap};
`;
