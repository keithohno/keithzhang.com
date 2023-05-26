import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

const PageSectionOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageSectionInner = styled.div`
  min-height: calc(100vh - 5rem);
  padding-bottom: 5rem;
  max-width: 800px;

  color: #e5e5e0;
  font-size: calc(16px + 0.2vw);
`;

export const PageSection: React.FC<PropsWithChildren<{ id: string }>> = ({
  children,
  id,
}) => {
  return (
    <PageSectionOuter>
      <PageSectionInner id={id}>{children}</PageSectionInner>
    </PageSectionOuter>
  );
};
