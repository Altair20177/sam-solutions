import styled from "styled-components";
import { ProductType } from "../../types";
import Product from "../product/Product";
import { ReactComponent as Cross } from "../header/icons/cross.svg";
import { useState } from "react";
import Text from "../generic/Text";

enum Options {
  PRICE = "price",
  NAME = "name",
}

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

  const [searchInput, setSearchInput] = useState<string>("");
  const [sortParam, setSortParam] = useState<string>("");
  const [productsToShow, setProductsToShow] =
    useState<Array<ProductType>>(products);

  function clearSearch() {
    setSearchInput("");
    setProductsToShow(products);
  }

  function sortByParametr(param: string) {
    setSortParam(param);

    switch (param) {
      case Options.NAME: {
        setProductsToShow(
          products.sort((product1: ProductType, product2: ProductType) =>
            product1.name > product2.name ? 1 : -1
          )
        );
        break;
      }
      case Options.PRICE: {
        setProductsToShow(
          products.sort((product1: ProductType, product2: ProductType) =>
            +product1.price > +product2.price ? 1 : -1
          )
        );
        break;
      }
      default: {
        setProductsToShow(products);
      }
    }
  }

  function onSearch(value: string) {
    setSearchInput(value);

    setProductsToShow(
      value !== ""
        ? products.filter(
            (product: ProductType) =>
              product.name.toLowerCase().includes(value.toLowerCase()) ||
              product.price.includes(value.toLowerCase()) ||
              product.description.toLowerCase().includes(value.toLowerCase())
          )
        : products
    );
  }

  return (
    <Div>
      <Top>
        <SearchBlock>
          <Search
            value={searchInput}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Item to search..."
          />
          <Img onClick={clearSearch}>
            <Cross height={20} width={20} />
          </Img>
        </SearchBlock>
        <SearchBlock>
          <Text size={22} pr={10}>
            Sort by:
          </Text>
          <Sort onChange={(e) => sortByParametr(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </Sort>
        </SearchBlock>
      </Top>
      <AllProducts>
        {productsToShow.length !== 0 ? (
          productsToShow.map((product: ProductType) => {
            return <Product product={product} key={product.id} />;
          })
        ) : (
          <Text bold size={36} mt={50}>
            There are no such products!
          </Text>
        )}
      </AllProducts>
    </Div>
  );
}

const AllProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  width: 75%;
`;

const Search = styled.input`
  width: 200px;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 18px;
`;

const Sort = styled.select`
  width: 100px;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 18px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  display: flex;
  align-self: center;
  margin-left: 10px;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;

    & path {
      transition: 0.2s;

      fill: #cf0101;
    }
  }
`;
