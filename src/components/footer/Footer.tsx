import styled from "styled-components";
import { changeCurrentPage } from "../../redux/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../generic/Button";
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
      <Button size="xs" callback={prevPage}>
        <Text size={24}>Prev</Text>
      </Button>
      <Text size={26} bold>
        {productPage.currentPage}
      </Text>
      <Button size="xs" callback={nextPage}>
        <Text size={24}>Next</Text>
      </Button>
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
