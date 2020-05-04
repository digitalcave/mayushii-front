import React from "react";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 0;
  background: #000000;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const BannerText = styled.span`
  font-size: 24px;
  line-height: 32px;
  color: #fafafa;
`;

function Header() {
  return (
    <Wrapper>
      <BannerText>Tuturu</BannerText>
    </Wrapper>
  );
}

export default Header;
