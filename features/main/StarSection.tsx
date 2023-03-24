import styled from "@emotion/styled";
import { PageSection } from "../shared/PageSection";

const ProjectSection: React.FC = () => {
  return (
    <PageSection id="starsection">
      The background of this page uses WebGL to render an accurate view of the
      night sky! I used Yale's BSC5 dataset to obtain the positions, magnitudes,
      and stellar classifications (colors) of 2000 stars. I'm planning to add
      some interactive controls in the near future :)
    </PageSection>
  );
};

export default ProjectSection;
