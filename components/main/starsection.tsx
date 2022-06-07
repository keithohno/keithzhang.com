import styled from "@emotion/styled";

const ProjectSection: React.FC = () => {
  return (
    <Main id="starsection">
      The background of this page uses WebGL to render an accurate view of the
      night sky! I used Yale's BSC5 dataset to obtain the positions, magnitudes,
      and stellar classifications (colors) of 2000 stars. I'm planning to add
      some interactive controls in the near future :)
    </Main>
  );
};

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #cacac9;
  font-size: calc(16px + 0.2vw);
`;

export default ProjectSection;
