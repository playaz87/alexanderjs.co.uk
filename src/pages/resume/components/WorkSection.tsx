import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../../common/components/Tag';

interface Props {
  from: string;
  to: string;
  header: {
    title: string;
    company: string;
    link?: string;
  };
  content: string;
  footer?: React.ReactNode;
  skills: string[];
}

export const WorkSection: React.FC<Props> = ({ from, to, header, content, footer, skills }) => {
  return (
    <Container>
      <Date>
        <div>{from}</div>
        <span />
        <div>{to}</div>
      </Date>

      <Content>
        <Header>
          {header.link && (
            <a href={header.link}>
              {header.title} · {header.company}
            </a>
          )}
          {!header.link && (
            <>
              {header.title} · {header.company}
            </>
          )}
        </Header>

        <p>{content}</p>

        {footer}

        <SkillWrapper>
          {skills.map(skill => (
            <Tag key={skill} label={skill} />
          ))}
        </SkillWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-items: start;
  column-gap: 1rem;
  row-gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 8rem 1fr;
    column-gap: 1.5rem;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2rem;
  text-transform: uppercase;
  color: var(--mono-60);

  > span {
    width: 1rem;
    height: 1px;
    background-color: var(--mono-60);
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  * {
    text-wrap: pretty;
  }
`;

const Header = styled.h3`
  > a {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &:after {
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      mask: url('/icons/link.svg');
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;
      background-color: white;
    }
  }
`;

export const StoreLink = styled.a<{ $type: 'ios' | 'android' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    mask: url('/icons/${props => props.$type}_logo.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: white;
  }

  &:after {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    mask: url('/icons/link.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: white;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;
