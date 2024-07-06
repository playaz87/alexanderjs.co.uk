import styled from 'styled-components';

type Sizes = 's' | 'm' | 'l';
export const Headline = styled.div<{ $size: Sizes }>`
    font-size: var(--headline-font-size-${props => props.$size});
    font-weight: 700;
    line-height: 140%;
    user-select: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

export const Title = styled.div<{ $size: Sizes }>`
    font-size: var(--title-font-size-${props => props.$size});
    font-weight: 600;
    line-height: 150%;
    user-select: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

export const Label = styled.div<{ $size: Sizes }>`
    font-size: var(--label-font-size-${props => props.$size});
    font-weight: 500;
    line-height: 160%;
    user-select: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

export const Body = styled.div<{ $size: Sizes }>`
    font-size: var(--body-font-size-${props => props.$size});
    font-weight: 400;
    line-height: 160%;
    user-select: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;
