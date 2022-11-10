import styled from "styled-components";
import { ProductType } from "../../types";
import Product from "../product/Product";
import { ReactComponent as Cross } from "../header/icons/cross.svg";
import { useEffect, useState } from "react";
import Text from "../generic/Text";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addProducts, changeCurrentPage } from "../../redux/catalogSlice";

enum Options {
  PRICE = "price",
  NAME = "name",
}

export default function Catalog() {
  const dispatch = useAppDispatch();
  const { currentPage, allProducts, amountProductsToShow } = useAppSelector(
    (state) => state.catalog
  );

  const [searchInput, setSearchInput] = useState<string>("");
  const [sortParam, setSortParam] = useState<string>("");
  const [productsToShow, setProductsToShow] =
    useState<Array<ProductType>>(allProducts);

  function calcArrayToShow(arrToSlice: ProductType[]) {
    return arrToSlice.slice(
      (+currentPage - 1) * amountProductsToShow,
      +currentPage * amountProductsToShow
    );
  }

  useEffect(() => {
    setProductsToShow(calcArrayToShow(allProducts));
  }, [allProducts, currentPage]);

  function clearSearch() {
    setSearchInput("");
    setProductsToShow(calcArrayToShow(allProducts));
  }

  function sortByParametr(param: string) {
    setSortParam(param);
    const productsCopy = allProducts.slice();

    switch (param) {
      case Options.NAME: {
        productsCopy.sort((product1: ProductType, product2: ProductType) =>
          product1.name > product2.name ? 1 : -1
        );

        break;
      }
      case Options.PRICE: {
        productsCopy.sort((product1: ProductType, product2: ProductType) =>
          +product1.price > +product2.price ? 1 : -1
        );

        break;
      }
      default: {
        setProductsToShow(allProducts);
      }
    }

    setProductsToShow(calcArrayToShow(productsCopy));

    dispatch(addProducts(productsCopy));
    dispatch(changeCurrentPage(1));
  }

  function onSearch(value: string) {
    setSearchInput(value);

    const result = allProducts.filter(
      (product: ProductType) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.price.includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
    );

    setProductsToShow(value !== "" ? result : calcArrayToShow(allProducts));
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
          <Text bold size={36} mt={50} align="center">
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

  @media (max-width: 635px) {
    width: 65%;
  }
`;

const Search = styled.input`
  width: 200px;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 18px;

  @media (max-width: 635px) {
    width: 150px;
  }
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

  @media (max-width: 635px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
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
