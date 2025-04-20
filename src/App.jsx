import { ThemeProvider } from "styled-components";
import { AboutSection } from "./components/about";
import { DividerLeft, DividerRight } from "./components/dividers";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { AppContainer, RedBackground } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header />
        <HeroSection />
        <RedBackground>
          <DividerLeft />
          <AboutSection />
          <DividerRight />
        </RedBackground>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
