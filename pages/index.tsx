import type { NextPage } from "next";
import Main from "../features/main";
import { Global, css } from "@emotion/react";

const fontStyles = css`
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-ExtraLight.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "KoHo";
    src: url("/fonts/KoHo-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Global styles={fontStyles} />
      <Main />
    </>
  );
};

export default Home;
