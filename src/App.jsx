import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PageContainer } from "./styles";
import {
  AboutSection,
  HeroSection,
  ModesSections,
  UpdatesSection,
} from "./components/sections";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PageContainer>
        <Header />
        <HeroSection />
        <AboutSection />
        <ModesSections />
        <UpdatesSection />
        <Footer />
      </PageContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
