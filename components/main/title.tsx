import styled from "@emotion/styled";

const Title: React.FC = () => {
  return (
    <Main>
      <Panel>
        <Small>Hi! my name is</Small>
        <Big>Keith Zhang</Big>
        <Me src="/ME.png" />
        <Small>
          I am a computer science graduate with an emphasis on
          <strong> full stack web development</strong>. I value
          <Yellow> excellence</Yellow>, <Pink>compassion</Pink>, and
          <Blue> character</Blue> in all areas of work and of life.
        </Small>
      </Panel>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100%;
  max-width: calc(16vw + 300px);
  padding-left: 6px;
  padding-right: 6px;
`;

const Panel = styled.div`
  width: 100%;
  height: 90vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #cacac9;
`;

const Big = styled.div`
  font-family: KoHo;
  margin: 3px;
  font-size: calc(40px + 3vw);
  font-weight: 800;
`;

const Small = styled.p`
  margin: 3px;
  font-size: calc(20px + 0.5vw);
`;

const Blue = styled.span`
  color: #c0cfff;
`;

const Yellow = styled.span`
  color: #ffe0c0;
`;

const Pink = styled.span`
  color: #ffc9df;
`;

const Me = styled.img`
  margin: 16px;
  width: calc(120px + 3vw);
  height: calc(120px + 3vw);
  border-radius: 50%;
  animation: pulse 3s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 rgba(255, 238, 204, 0);
    }
    50% {
      box-shadow: 0 0 rgba(255, 238, 204, 1);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(255, 238, 204, 0);
    }
  }
`;

export default Title;
