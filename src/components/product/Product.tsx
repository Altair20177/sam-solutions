import styled from "styled-components";
import { addItemToCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ProductType } from "../../types";
import Button from "../generic/Button";
import Text from "../generic/Text";

interface ProductInterface {
  product: ProductType;
}

export default function Product({ product }: ProductInterface) {
  const dispatch = useAppDispatch();

  function addToCart() {
    dispatch(addItemToCart(product));
  }

  return (
    <Card>
      <Image src={require(`${product.image}`)} alt="image" />
      <CardAbout>
        <Text bold size={30} pt={15} pb={10}>
          {product.name}
        </Text>
        <Text>{product.description}</Text>
      </CardAbout>
      <CardBottom>
        <Text>{product.price} $</Text>
        <Button size="sm" callback={addToCart} buttonType="buy">
          <Text bold>Buy</Text>
        </Button>
      </CardBottom>
    </Card>
  );
}

const Card = styled.div`
  margin: 0 20px 20px 0;
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
  position: relative;
  top: -1px;

  @media (max-width: 895px) {
    width: 200px;
  }

  @media (max-width: 635px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px solid #000;
`;

const CardAbout = styled.div`
  padding: 10px 15px;
  height: 135px;

  @media (max-width: 895px) {
    height: 80px;
    padding: 0 10px;
  }
`;

const CardBottom = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
