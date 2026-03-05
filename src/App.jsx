import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PageContainer } from "./styles";
import {
  AboutSection,
  FeatureSection,
  HeroSection,
  UpdatesSection,
} from "./components/sections";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PageContainer>
        <Header />
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <UpdatesSection />
        <Footer />
      </PageContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
