import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

interface PageSectionProps {
  id: string;
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  id,
}) => {
  return (
    <PageSectionOuter>
      <PageSectionInner id={id}>{children}</PageSectionInner>
    </PageSectionOuter>
  );
};

const PageSectionOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageSectionInner = styled.div`
  min-height: calc(100vh - 6rem);
  max-width: 800px;
  width: 100%;

  font-family: KoHo;
  font-weight: 400;
  color: #e5e5e0;
  font-size: calc(16px + 0.2vw);
`;
