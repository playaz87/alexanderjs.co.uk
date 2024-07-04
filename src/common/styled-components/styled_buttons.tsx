import styled, { css } from 'styled-components';
import './styled_vars.css';

export type BtnSizes = 'xs' | 's' | 'm' | 'l' | 'xl';
export type BtnColors = 'primary' | 'error' | 'mono' | 'secondary';

export interface BtnIcon {
  slot: 'start' | 'end';
  src: string;
  rotate?: string;
}

const Button = styled.button<{
  $size: BtnSizes;
  $icon?: BtnIcon;
  $color: BtnColors;
  $iconOnlyBp?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => (props.$icon?.slot === 'end' ? 'row-reverse' : 'row')};
  gap: 0.4rem;
  outline: none;
  margin: 0;
  border: none;
  box-sizing: border-box;
  font-weight: 500;
  border-radius: 4px;
  min-width: fit-content;
  width: fit-content;
  cursor: pointer;
  height: var(--btn-height-${props => props.$size});
  min-height: var(--btn-height-${props => props.$size});
  font-size: var(--btn-font-${props => props.$size});
  padding: var(--btn-padding-${props => props.$size});
  user-select: none;
  flex-shrink: 0;
  position: relative;

  ${({ $size, $icon, color }) =>
    $icon &&
    css`
      padding: var(--btn-padding-icon-${$size});

      &:before {
        content: '';
        width: var(--btn-icon-size-${$size});
        height: var(--btn-icon-size-${$size});
        mask: url(${$icon.src}) no-repeat 100% 100%;
        mask-position: center;
        -webkit-mask: url(${$icon.src}) no-repeat 100% 100%;
        -webkit-mask-size: cover;
        transform: rotate(${$icon.rotate ?? '0deg'});
      }
    `}
  ${({ $iconOnlyBp, $size }) =>
    $iconOnlyBp &&
    css`
      @media screen and (max-width: ${$iconOnlyBp}px) {
        font-size: 0px;
        min-width: min-content !important;
        padding: var(--btn-padding-${$size});
      }
    `}
	&:disabled {
    cursor: not-allowed;
  }
`;

export const FilledButton = styled(Button)`
  background-color: var(--btn-bg-${props => props.$color});
  color: var(--btn-font-color-${props => props.$color});
  min-width: 8rem;

  &:hover {
    background-color: var(--btn-hover-${props => props.$color});
  }

  &:before,
  &:after {
    background-color: ${props => (props.$color === 'mono' ? 'var(--mono-30)' : 'white')};
  }

  &:active {
    background-color: var(--btn-bg-active-${props => props.$color});
    color: var(--btn-font-color-active-${props => props.$color});

    &:before,
    &:after {
      background-color: ${props => (props.$color === 'mono' ? 'var(--mono-30)' : 'white')};
    }
  }

  &:disabled {
    background-color: var(--mono-99);
    color: var(--mono-70);

    &:before,
    &:after {
      background-color: var(--mono-70);
    }
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid var(--btn-outline-border-${props => props.$color});
  color: var(--btn-outline-font-color-${props => props.$color});

  &:before,
  &:after {
    background-color: var(--btn-outline-font-color-${props => props.$color});
  }

  &:hover {
    background-color: var(--btn-outline-bg-hover-${props => props.$color});
  }

  &:active {
    color: var(--btn-outline-border-active-${props => props.$color});
    border-color: var(--btn-outline-border-active-${props => props.$color});
    background-color: var(--btn-outline-bg-active-${props => props.$color});

    &:before,
    &:after {
      background-color: var(--btn-outline-border-active-${props => props.$color});
    }
  }

  &:disabled {
    color: var(--mono-70);
    border-color: var(--mono-70);

    &:before,
    &:after {
      background-color: var(--mono-70);
    }
  }
`;

export const TextButton = styled(OutlineButton)`
  border: none;
  min-width: fit-content;
  background-color: transparent;
`;
