import styled from "styled-components";
import {About} from "./components/About.tsx";
import {Skills} from "./components/Skills.tsx";
import {WorkHistory} from "./components/WorkHistory.tsx";
import {Section} from "./components/shared.ts";
import {Header} from "./components/Header.tsx";
import {WorkHistoryItem} from "./components/WorkHistoryItem.tsx";

function App() {

  return (
    <Container>
      <Header />
      <Content>
        <ContentLeft>
          <Section>
            <h3>About</h3>
            <About />
          </Section>
          <Section>
            <h3>Skills</h3>
            <Skills />
          </Section>
        </ContentLeft>

        <ContentRight>
          <Section>
            <h3>Work History</h3>
            <WorkHistory />
          </Section>
          <Section>
            <h3>Personal Projects</h3>
            <WorkHistoryItem id={1} title={{role: 'Developer', company: 'Tome of D2'}} date={'2018 ~ Present'} stack={[]} summary={[]} />
          </Section>
        </ContentRight>

      </Content>
    </Container>
  )
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
`;




const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const ContentLeft = styled.div`
    background-color: #f4f4f4;
`;

const ContentRight = styled.div`
    //background-color: #f4f4f4;
    container-type: inline-size;
    container-name: content-right;
`;

