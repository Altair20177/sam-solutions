import styled from "styled-components";
import { addItemToCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ProductType } from "../../types";
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
        <Button onClick={addToCart}>Buy</Button>
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

const Button = styled.button`
  padding: 5px 13px;
  border-radius: 3px;
  border: 1px solid black;
  transition: 0.2s;
  font-weight: bold;
  letter-spacing: 1.2px;

  &:hover {
    color: white;
    background: black;
    letter-spacing: 4px;
  }
`;
