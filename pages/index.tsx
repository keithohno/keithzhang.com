import type { NextPage } from "next";
import Main from "../components/main";
import Skyfield from "../components/skyfield";
import { Global, css } from "@emotion/react";

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
      <Skyfield />
      <Main></Main>
    </>
  );
};

export default Home;
