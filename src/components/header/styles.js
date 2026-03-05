import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  inset: 0;

  width: calc(100vw - 80px);
  height: 64px;
  max-width: 1840px;

  margin: 0 auto;
  margin-top: 40px;

  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    z-index: 3;
  }

  @media (min-width: 678px) {
    justify-content: start;
  }
`;
export const Logo = styled.img`
  width: 224px;
  height: 100%;
`;
