import React from "react";
import { HeaderContainer, HeaderLogo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="#">
        <HeaderLogo src="./mpn_Logo.png" />
      </a>
    </HeaderContainer>
  );
}
