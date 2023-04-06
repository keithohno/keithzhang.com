import type { NextPage } from "next";
import Main from "../features/main";
import Starfield from "../features/starfield";
import { Global, css } from "@emotion/react";
import { StarfieldProvider } from "../features/starfield/context";

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
        <Starfield />
        <Main></Main>
      </StarfieldProvider>
    </>
  );
};

export default Home;
