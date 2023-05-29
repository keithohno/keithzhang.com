import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

interface PageSectionProps {
  id: string;
  noPadding?: boolean;
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  id,
  noPadding,
}) => {
  return (
    <PageSectionOuter>
      <PageSectionInner id={id} padding={!noPadding}>
        {children}
      </PageSectionInner>
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

const dynamicPadding = (props: { padding?: boolean }) => ({
  paddingBottom: props.padding ? "5rem" : "0",
});

const PageSectionInner = styled.div`
  min-height: calc(100vh - 5rem);
  max-width: 800px;
  ${dynamicPadding}

  font-family: KoHo;
  color: #e5e5e0;
  font-size: calc(16px + 0.2vw);
`;
