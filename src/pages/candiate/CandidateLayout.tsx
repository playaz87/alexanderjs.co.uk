import React from 'react';
import styled from 'styled-components';

export const CandidateLayout = (): React.ReactElement => {
  return (
    <Container>
      <Img src={'/icons/logo_name_dark.svg'} />
      <Video src={'/videos/candidate_demo.mp4'} controls />
      <Description>
        <div>
          An innovate Applicant Tracking System that uses Kakao Talk to schedule interviews with applicants. Built using React, Redux and
          Styled Components. Data is automatically synced via websockets. A global auth portal the various services.
        </div>
        <Features>
          <ul>
            <li>Dashboard</li>
            <ul>
              <li>Drag and Drop Kanban board</li>
              <li>List</li>
              <li>Calendar</li>
            </ul>
          </ul>

          <ul>
            <li>Create interview proposals</li>
            <ul>
              <li>Suggest interview times</li>
              <li>Set response deadline</li>
              <li>Assign HR manager</li>
              <li>Assign interviewers</li>
              <li>Interview type (remote / in-person)</li>
              <li>Preview messages</li>
            </ul>
          </ul>

          <ul>
            <li>Applicant Detail View</li>
            <ul>
              <li>Add and view application documents</li>
              <li>Communication history</li>
              <li>Notes (with @mentions)</li>
              <li>Evaluations</li>
            </ul>
          </ul>

          <ul>
            <li>Gift shop</li>
            <ul>
              <li>Choose from a variety of gifts</li>
              <li>Gifts delivered as a barcode/QR code to Kakao Talk</li>
            </ul>
          </ul>

          <ul>
            <li>Application Tree</li>
            <ul>
              <li>Create job openings</li>
              <li>Applicants can apply with upto 5 supporting documents</li>
              <li>Server Side Rendered with customisable dynamic meta tags</li>
            </ul>
          </ul>
        </Features>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--bg-1);
`;

const Img = styled.img`
  padding: 1rem;
  max-width: 300px;
`;

const Video = styled.video`
  width: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  > ul > li {
    font-size: 1.2rem;
    font-weight: 600;
  }

  li {
    margin-top: 4px;
  }
`;
