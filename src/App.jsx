import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { AppContainer } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header />
        <HeroSection />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}