import styled from "styled-components";
import { ProductType } from "../../types";
import Product from "../product/Product";

export default function Catalog() {
  const products: Array<ProductType> = [
    {
      id: "1",
      name: "Card 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "10",
      image: "./assets/kranvagn.jpg",
    },
    {
      id: "2",
      name: "Card 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magnam eum, repellat.",
      price: "15",
      image: "./assets/obj-277.jpg",
    },
    {
      id: "3",
      name: "Card 3",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: "25",
      image: "./assets/obj-705a.jpg",
    },
    {
      id: "4",
      name: "Card 4",
      description:
        "Lorem ipsum dolor sit, amet adipisicing elit. Perspiciatis, alias!",
      price: "20",
      image: "./assets/progetto-m35.jpg",
    },
    {
      id: "5",
      name: "Card 5",
      description:
        "Lorem ipsum dolor, sit amet consect. Totam magnam eum, repellat dignissimos cupiditate sequi.",
      price: "15",
      image: "./assets/pzkpfw-7.jpg",
    },
    {
      id: "6",
      name: "Card 6",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "10",
      image: "./assets/t-55a.jpg",
    },
    {
      id: "7",
      name: "Card 7",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "15",
      image: "./assets/kranvagn.jpg",
    },
    {
      id: "8",
      name: "Card 8",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "15",
      image: "./assets/obj-277.jpg",
    },
    {
      id: "9",
      name: "Card 9",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "30",
      image: "./assets/obj-705a.jpg",
    },
    {
      id: "10",
      name: "Card 10",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "5",
      image: "./assets/progetto-m35.jpg",
    },
    {
      id: "11",
      name: "Card 11",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, alias!",
      price: "25",
      image: "./assets/pzkpfw-7.jpg",
    },
  ];

  return (
    <AllProducts>
      {products.map((product: ProductType) => {
        return <Product product={product} key={product.id} />;
      })}
    </AllProducts>
  );
}

const AllProducts = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;
