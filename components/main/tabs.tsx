import styled from "@emotion/styled";

const Tabs: React.FC = () => {
  const scrollFn = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Main>
      <TabArray>
        <TabL
          onClick={() => {
            scrollFn("titlesection");
          }}
        >
          {" "}
        </TabL>
        <TabR
          onClick={() => {
            scrollFn("projectsection");
          }}
        ></TabR>
        <TabR
          onClick={() => {
            scrollFn("starsection");
          }}
        ></TabR>
        <TabL
          onClick={() => {
            scrollFn("contactsection");
          }}
        ></TabL>
      </TabArray>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabArray = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(400px + 8vw);
  width: calc(60px + 4vw);
  flex-direction: column;
`;

const TabL = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ddc;
  cursor: pointer;
`;

const TabR = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  align-self: flex-end;
  background-color: green;
  background-color: #ddc;
  cursor: pointer;
`;

export default Tabs;
