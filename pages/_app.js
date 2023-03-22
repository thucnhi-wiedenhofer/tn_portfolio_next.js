import "@/styles/globals.css";
import "@/styles/normalize.css";
import { Inter } from "next/font/google";
import Container from "../components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Container className={inter.className}>
      <Component {...pageProps} />
    </Container>
  );
}
