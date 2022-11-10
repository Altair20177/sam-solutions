import styled from "styled-components";
import { changeCurrentPage } from "../../redux/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Text from "../generic/Text";

interface FooterProps {
  length: number;
}

export default function Footer({ length }: FooterProps) {
  const productPage = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  function prevPage() {
    if (productPage.currentPage === 1) return null;

    dispatch(changeCurrentPage(productPage.currentPage - 1));
  }

  function nextPage() {
    if (
      productPage.currentPage ===
      Math.ceil(length / productPage.amountProductsToShow)
    )
      return null;

    dispatch(changeCurrentPage(productPage.currentPage + 1));
  }

  return (
    <Pagination>
      <Button onClick={prevPage}>Prev</Button>
      <Text size={26} bold>
        {productPage.currentPage}
      </Text>
      <Button onClick={nextPage}>Next</Button>
    </Pagination>
  );
}

const Pagination = styled.div`
  width: 25%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const Button = styled.button`
  font-size: 24px;
  padding: 5px 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
