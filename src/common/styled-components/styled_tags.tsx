const TagBase = styled.div<{ $color: TagColors; $icon?: boolean }>`
  min-width: 0;
  height: 2.2rem;
  min-height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  padding: ${props => (props.$icon ? '0 0.8rem 0 1.4rem' : '0 1rem')};

  border-radius: 1000px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  max-width: max-content;
	flex-shrink: 0;

  > span {
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  ${({ $icon }) =>
	$icon &&
	css`
      &:after {
        content: '';
        width: 1.8rem;
        height: 1.8rem;
        mask: url('/images/common/close.svg') no-repeat 100% 100%;
      }
    `}
`;

import styled, { css } from 'styled-components';

export type TagColors = 'primary' | 'error' | 'mono' | 'secondary';

export const Tag = styled(TagBase)`
    color: var(--tag-font-sub-color-${props => props.$color});
    background-color: var(--tag-bg-sub-${props => props.$color});

    &:after {
        background-color: var(--tag-font-sub-color-${props => props.$color});
    }
`;

export const TagFilled = styled(TagBase)`
  color: white;
  background-color: var(--tag-bg-filled-${props => props.$color});

  &:after {
    background-color: white;
  }
`;

export const TagOutline = styled(TagBase)`
  color: var(--tag-font-outline-color-${props => props.$color});
  border: 1px solid var(--tag-font-outline-color-${props => props.$color});
  background-color: white;

  &:after {
    background-color: var(--tag-font-outline-color-${props => props.$color});
  }
`;
