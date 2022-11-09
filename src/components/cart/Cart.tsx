import { useState } from "react";
import styled from "styled-components";
import {
  removeAllItemsFromCart,
  removeItemsFromCart,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ProductType } from "../../types";
import Notification from "../generic/Notification";
import Text from "../generic/Text";
import cross from "../header/icons/cross.svg";

export default function Cart() {
  const productsToBuy = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [showMess, setShowMess] = useState<boolean>(false);

  function deleteProducts(product: ProductType) {
    dispatch(removeItemsFromCart(product.id));
  }

  function finishSum() {
    let sum = 0;

    for (let product in productsToBuy.productsAmount) {
      const searchResult =
        productsToBuy.cartItems.find((item) => product === item.id) ||
        productsToBuy.cartItems[0];

      sum += productsToBuy.productsAmount[product] * +searchResult?.price;
    }

    return sum;
  }

  function buyProducts() {
    setShowMess(true);
    dispatch(removeAllItemsFromCart());
    setTimeout(() => {setShowMess(false)}, 3000)
  }

  return (
    <>
      <CartSection>
        <Text align="center" bb="black" pt={10} pb={10} mb={10} size={32} bold>
          Cart
        </Text>
        <CartItems>
          {productsToBuy.cartItems.length !== 0 &&
            productsToBuy.cartItems.map((item: ProductType) => (
              <CartItem key={item.id}>
                <Inside>
                  <div>
                    <Text bold pb={5} size={22}>
                      {item.name}
                    </Text>
                    <Text>
                      {item.price} x {productsToBuy.productsAmount[item.id]}
                    </Text>
                  </div>
                  <Image
                    onClick={() => deleteProducts(item)}
                    src={cross}
                    alt="cross"
                  />
                </Inside>
              </CartItem>
            ))}
        </CartItems>
        <Footer>
          <Total>
            <Text size={22}>Total:</Text>
            <Text bold size={26}>
              $ {finishSum()}
            </Text>
          </Total>
          <Checkout onClick={buyProducts}>Checkout</Checkout>
        </Footer>
      </CartSection>

      <Notification showMess={showMess}/>
    </>
  );
}

const CartSection = styled.div`
  position: sticky;
  top: 20px;
  width: 25%;
  height: 82vh;
  border: 1px solid black;
  border-radius: 3px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  margin: 0 auto 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
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
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 15px;
`;

const Checkout = styled.button`
  width: 100%;
  margin: 0 auto;
  height: 50px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;

const Footer = styled.div`
  padding: 0 10px 10px;
`;

const CartItems = styled.div`
  padding: 0 10px 10px;
  flex: 1 1 auto;
  overflow-y: auto;
`;
