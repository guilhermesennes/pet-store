import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/BannerHero";
import { CategoryList } from "./components/CategoryList";
import Container from "./components/container/Container";
import Heading from "./components/container/Heading";
import { ListaProdutos } from "./components/Product";
import { ListaBanners } from "./components/Banner";
import { Newsletter } from "./components/Newsletter";


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <CategoryList />
      <Container>
        <Heading>Novidades</Heading>
        <ListaProdutos numItens="4" />
      </Container>
      <Container>
        <ListaBanners />
      </Container>
      <Container>
        <Heading>Destaques</Heading>
        <ListaProdutos numItens="8" />
      </Container>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
