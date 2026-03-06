import styled from "styled-components";

export const BaseButton = styled.a`
  position: relative;
  border: none;

  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04rem;

  transition: background-color 0.2s linear;
  user-select: none;

  @media (min-width: 678px) {
    font-size: 18px;
  }
`;

export const MainButtonStyled = styled(BaseButton)`
  padding: 12px 15.5px;
  background-color: ${(props) => props.theme.red_transparent};
  background-image: url("./backgrounds/redScanlines.png");

  &:hover {
    background-color: ${(props) => props.theme.red_hover};
  }

  img:nth-child(1) {
    width: 8px;
    height: 8px;

    position: absolute;
    bottom: 0;
    left: 0;
  }
  img:nth-child(2) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    left: 0;
  }
  img:nth-child(3) {
    position: absolute;
    width: 8px;
    height: 8px;

    bottom: 0;
    right: 0;
  }
  img:nth-child(4) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    right: 0;
  }
`;

export const SecondaryButtonStyled = styled(BaseButton)`
  padding: 12px 16px;
  background-color: ${(props) => props.theme.white_transparent};
  background-image: url("./backgrounds/whiteScanlines.png");

  &:hover {
    background-color: ${(props) => props.theme.white_hover};
  }

  img:nth-child(1) {
    width: 8px;
    height: 8px;

    position: absolute;
    bottom: 0;
    left: 0;
  }
  img:nth-child(2) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    left: 0;
  }
  img:nth-child(3) {
    position: absolute;
    width: 8px;
    height: 8px;

    bottom: 0;
    right: 0;
  }
  img:nth-child(4) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    right: 0;
  }
`;
