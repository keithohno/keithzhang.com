import { useEffect, useState } from "react";

const adjustCanvasHeight = (
  canvas: HTMLCanvasElement,
  glContext: WebGLRenderingContext
) => {
  canvas.width = canvas.parentElement!.clientWidth;
  canvas.height = canvas.parentElement!.clientHeight;
  glContext.viewport(0, 0, canvas.width, canvas.height);
};

export const useGl = (canvasElementId: string) => {
  const [gl, setGl] = useState<WebGLRenderingContext>();

  useEffect(() => {
    const canvas = document.getElementById(
      canvasElementId
    ) as HTMLCanvasElement;
    const glContext = canvas.getContext("webgl");

    if (!glContext) {
      console.error(
        "WebGL not supported, some elements may not render correctly"
      );
      return;
    }
    setGl(glContext);

    adjustCanvasHeight(canvas, glContext);
    window.addEventListener("resize", () => {
      adjustCanvasHeight(canvas, glContext);
    });
  }, []);

  return { gl, setGl };
};
