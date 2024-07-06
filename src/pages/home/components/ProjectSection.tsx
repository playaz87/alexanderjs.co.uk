import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../../common/components/Tag';
import { Link } from 'react-router-dom';
import { SkillWrapper } from '../../resume/components/WorkSection';

interface Props {
  imgSrc: string;
  header: {
    title: string;
    link: string;
  };
  content: string;
  skills: string[];
  footer?: React.ReactNode;
}

export const ProjectSection: React.FC<Props> = ({ imgSrc, header, content, skills, footer }) => {
  return (
    <Container>
      <Img src={imgSrc} alt={header.title} />

      <Content>
        <Header>
          <Link to={header.link}>{header.title}</Link>
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
  grid-template-columns: 10rem 1fr;
  align-items: start;
  column-gap: 1rem;
  row-gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 12rem 1fr;
    column-gap: 1.5rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
  padding-top: 2.6rem;
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
