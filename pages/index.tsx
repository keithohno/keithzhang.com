import type { NextPage } from "next";
import Main from "../features/main";
import Skyfield from "../features/skyfield";
import { Global, css } from "@emotion/react";
import { StarfieldProvider } from "../features/skyfield/context";

const Home: NextPage = () => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "KoHo";
            src: local(""), url("/fonts/koho.woff") format("woff"),
              url("/fonts/koho.woff2") format("woff2");
          }
        `}
      />
      <StarfieldProvider>
        <Skyfield />
        <Main></Main>
      </StarfieldProvider>
    </>
  );
};

export default Home;
