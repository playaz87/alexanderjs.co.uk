import styled from 'styled-components';

export const Section = styled.section`
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h3 {
    border-bottom: 1px solid var(--border-colour);
    box-shadow: 0 1px 0 0 #f1f1f1;
    padding-bottom: 0.4em;
    margin-bottom: 0.5em;
  }

  > a {
    text-decoration: none;
  }
`;
