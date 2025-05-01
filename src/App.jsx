import { ThemeProvider } from "styled-components";
import { AboutSection } from "./components/about";
import {
  RedDividerLeft,
  RedDividerRight,
  WhiteDividerLeft,
  WhiteDividerRight,
} from "./components/dividers";
import { FeatureSection } from "./components/features";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { Updates } from "./components/updates";
import { AppContainer, RedBackground, WhiteBackground } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header />
        <HeroSection />
        <RedBackground>
          <RedDividerLeft />
          <AboutSection />
          <RedDividerRight />
        </RedBackground>
        <FeatureSection />
        <WhiteBackground>
          <WhiteDividerLeft />
          <Updates />
          <WhiteDividerRight />
        </WhiteBackground>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
