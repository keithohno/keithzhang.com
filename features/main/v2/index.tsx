import styled from "@emotion/styled";

import { StarfieldProvider } from "../../starfield/context";
import Starfield from "../../starfield";

const Main: React.FC = () => {
  return (
    <StarfieldProvider>
      <OuterBorderBox>
        <InnerBorderBox>
          <ContentBox>
            <HeadingArea>
              <Big>Keith Zhang</Big>
              <NavigationArea>
                <div>bio</div>
                <div>cv</div>
                <div>stars</div>
              </NavigationArea>
            </HeadingArea>
            <BodyArea></BodyArea>
          </ContentBox>
          <Starfield />
        </InnerBorderBox>
      </OuterBorderBox>
    </StarfieldProvider>
  );
};

const Big = styled.div`
  flex-shrink: 0;
  font-family: KoHo;
  font-size: calc(30px + 2vw);
  font-weight: 500;
`;

const HeadingArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media (max-width: 5000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const BodyArea = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: white;
`;

const NavigationArea = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  font-size: calc(16px + 0.5vw);
  font-weight: 300;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const OuterBorderBox = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(black, #040e17);
`;

const InnerBorderBox = styled.div`
  border: 1px solid #8a8a85;
  position: relative;
  height: 100%;
  width: 100%;
`;

const ContentBox = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem 1.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #e0e0d6;
`;

export default Main;
