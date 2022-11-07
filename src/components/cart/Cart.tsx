import styled from "styled-components";
import Text from "../generic/Text";
import cross from "../header/icons/cross.svg";

export default function Cart() {
  return (
    <CartSection>
      <Text align="center" bb="black" pt={10} pb={10} mb={10} size={32} bold>
        Cart
      </Text>
      <CartItem>
        <Inside>
          <div>
            <Text bold pb={5} size={22}>Card 1</Text>
            <Text>$ 50 x 2</Text>
          </div>
          <Image src={cross} alt="cross" />
        </Inside>
      </CartItem>
    </CartSection>
  );
}

const CartSection = styled.div`
  position: sticky;
  top: 20px;
  width: 25%;
  height: 94vh;
  border: 1px solid black;
  border-radius: 3px;
`;

const CartItem = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 3px;
  margin: 0 auto 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Inside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  transition: .2s;

  &:hover{
    cursor: pointer;
    transform: scale(1.2);
  }
`;
