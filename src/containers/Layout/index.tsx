import React from "react";
import { Layout as AntLayout } from "antd";
import styled from "@emotion/styled";

import Header from "../../components/Header";

interface IProps {
  children: JSX.Element;
}

const Wrapper = styled(AntLayout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const AntContent = styled(AntLayout.Content)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AntHeader = styled(AntLayout.Header)`
  padding: 0;
  height: auto;
  background: transparent;
  line-height: normal;
`;

export default function Layout(props: IProps) {
  return (
    <Wrapper>
      <AntHeader>
        <Header />
      </AntHeader>

      <AntContent>{props.children}</AntContent>
    </Wrapper>
  );
}
