import { useEffect } from "react";
import styled from "styled-components";
import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";
import Text from "./components/generic/Text";
import Header from "./components/header/Header";
import { addProducts, changeAmountProductsToShow } from "./redux/catalogSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { ProductType } from "./types";

function App() {
  const products: Array<ProductType> = [
    {
      id: "1",
      name: "Card A",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "10",
      image: "./assets/kranvagn.jpg",
    },
    {
      id: "2",
      name: "Card B",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magnam eum, repellat.",
      price: "15",
      image: "./assets/obj-277.jpg",
    },
    {
      id: "3",
      name: "Card C",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: "25",
      image: "./assets/obj-705a.jpg",
    },
    {
      id: "4",
      name: "Card D",
      description:
        "Lorem ipsum dolor sit, amet adipisicing elit. Perspiciatis, alias!",
      price: "20",
      image: "./assets/progetto-m35.jpg",
    },
    {
      id: "5",
      name: "Card E",
      description:
        "Lorem ipsum dolor, sit amet consect. Totam magnam eum, repellat dignissimos cupiditate sequi.",
      price: "15",
      image: "./assets/pzkpfw-7.jpg",
    },
    {
      id: "6",
      name: "Card F",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "10",
      image: "./assets/t-55a.jpg",
    },
    {
      id: "7",
      name: "Card G",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "15",
      image: "./assets/kranvagn.jpg",
    },
    {
      id: "8",
      name: "Card H",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "15",
      image: "./assets/obj-277.jpg",
    },
    {
      id: "9",
      name: "Card I",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "30",
      image: "./assets/obj-705a.jpg",
    },
    {
      id: "10",
      name: "Card J",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "5",
      image: "./assets/progetto-m35.jpg",
    },
    {
      id: "11",
      name: "Card K",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "25",
      image: "./assets/pzkpfw-7.jpg",
    },
  ];

  const dispatch = useAppDispatch();
  const catalog = useAppSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(addProducts(products));

    window.innerWidth < 635 && dispatch(changeAmountProductsToShow(6));
  }, []);

  return (
    <>
      <Header />
      {catalog.allProducts.length !== 0 ? (
        <Main>
          <Catalog />
          <Cart />
        </Main>
      ) : (
        <Text bold size={32} align="center">
          Please, wait...
        </Text>
      )}

      {catalog.allProducts.length / catalog.amountProductsToShow > 1 && (
        <Footer length={products.length} />
      )}
    </>
  );
}

const Main = styled.div`
  max-width: 1400px;
  margin: 20px auto 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 635px) {
    padding: 0 10px;
    margin: 20px auto;
  }
`;

export default App;
