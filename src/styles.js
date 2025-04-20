import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const RedBackground = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("./backgrounds/gridRedBackground.png");
    background-repeat: no-repeat;
    opacity: 0.45;
  }
`;
