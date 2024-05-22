import React, {useState} from 'react';
import styled, {css, keyframes} from "styled-components";

interface Props {
  cols: number;
  rows: number;
  hint: string;
}

export const DissolveOverlay: React.FC<Props> = ({cols, rows, hint}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container $cols={cols} $rows={rows} onClick={() => setClicked(true)} $clicked={clicked}>
      {new Array(cols * rows).fill(null).map((_, i) => <Square $clicked={clicked} key={`square-${i}`} />)}
      <Hint $clicked={clicked}>{hint}</Hint>
    </Container>
  );
};

const rotate = keyframes`
    to {
        transform: rotate(90deg) scale(0) rotateX(190deg) rotateY(190deg) rotateZ(90deg);
        border-radius: 4px;
        display: none;
    }
`

const hide = keyframes`
    to {
        rotate: 10deg;
        display: contents;
    }
`;

const Container = styled.div<{$rows: number; $cols: number; $clicked: boolean}>`
    display: grid;
    grid-template-columns: repeat(${props => props.$cols}, 1fr);
    grid-template-rows: repeat(${props => props.$rows}, 1fr);
    position: absolute;
    inset: 0;
    cursor: pointer;
    overflow: hidden;
    
    &, > div {
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
    }
    
    ${({$clicked}) => $clicked && css`
        animation: ${hide};
    `}
`;

const Square = styled.div<{$clicked: boolean}>`
    background-color: rgba(0, 0, 0, 0.81);
    ${({$clicked}) => $clicked && css`
        animation: ${rotate};
    `}
`;

const Hint = styled.div<{$clicked: boolean}>`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    
    ${({$clicked}) => $clicked && css`
        display: none;
    `}
`;