import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo src="./mpn_Logo.png" />
      </a>
    </HeaderContainer>
  );
}
