import styled from "styled-components";
import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Catalog />
        <Cart />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  max-width: 1400px;
  margin: 20px auto 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export default App;
