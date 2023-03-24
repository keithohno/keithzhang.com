import React, { PropsWithChildren } from "react";

type PageSectionProps = React.PropsWithChildren<{
  id: string;
}>;

export const PageSection: React.FC<PageSectionProps> = ({ children, id }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#cacac9",
        fontSize: "calc(16px + 0.2vw)",
      }}
      id={id}
    >
      {children}
    </div>
  );
};
