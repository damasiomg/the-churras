import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import headerBackground from '../assets/header_background.png';
import { Container, Header } from "../styles/pages/app.style";
import { theme } from "../styles";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(35, 31, 32, 0), ${theme.colors.primary}), url(${headerBackground.src})`
        }}

      
      />
      <Component {...pageProps} />
    </Container>
  )
}
