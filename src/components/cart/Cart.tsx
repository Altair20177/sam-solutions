import { useState } from "react";
import styled from "styled-components";
import {
  removeAllItemsFromCart,
  removeItemsFromCart,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ProductType } from "../../types";
import Button from "../generic/Button";
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
    if (productsToBuy.cartItems.length !== 0) {
      setShowMess(true);
      dispatch(removeAllItemsFromCart());
      setTimeout(() => {
        setShowMess(false);
      }, 3000);
    }
  }

  return (
    <>
      <CartSection>
        <Text align="center" bb="black" pt={10} pb={10} mb={10} size={32} bold>
          Cart
        </Text>
        <CartItems>
          {productsToBuy.cartItems.length !== 0 ? (
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
            ))
          ) : (
            <Text size={28} mt={20} align="center" bold>
              Your Cart is empty!
            </Text>
          )}
        </CartItems>
        <Footer>
          <Total>
            <Text size={22}>Total:</Text>
            <Text bold size={26}>
              $ {finishSum()}
            </Text>
          </Total>
          <Button buttonType="checkout" size="md" callback={buyProducts}>
            <Text bold align="center" size={20}>
              Checkout
            </Text>
          </Button>
        </Footer>
      </CartSection>

      <Notification showMess={showMess} />
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

  @media (max-width: 895px) {
    height: 80vh;
  }

  @media (max-width: 635px) {
    width: 35%;
  }
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

  @media (max-width: 400px) {
    height: 50px;
  }
`;

const Inside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 400px) {
    padding: 0 5px;
  }
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

  @media (max-width: 400px) {
    padding: 0 5px;
  }
`;

const Footer = styled.div`
  padding: 0 10px 10px;

  @media (max-width: 400px) {
    padding: 0 5px 5px;
  }
`;

const CartItems = styled.div`
  padding: 0 10px 10px;
  flex: 1 1 auto;
  overflow-y: auto;

  @media (max-width: 400px) {
    padding: 0 5px 5px;
  }
`;
