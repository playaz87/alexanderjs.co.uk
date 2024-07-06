import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
}

export const Tag: React.FC<Props> = ({ label }) => {
  return <Container>{label}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 1000px;
  background-color: rgba(45, 212, 191, 0.1);
  color: var(--text-accent);
`;
