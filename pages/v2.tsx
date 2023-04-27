import type { NextPage } from "next";
import Main from "../features/main/v2";
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
      <Main />
    </>
  );
};

export default Home;
