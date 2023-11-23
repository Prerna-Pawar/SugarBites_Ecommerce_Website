import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartPage from "./pages/CartPage.js";
const Card1 = ({ amount1, checkoutHandler }) => {
  return (
    <VStack>
      <img src={require("./images1/payment.jpg")} />
      <Text className="f-s">{amount1}</Text>
      <Button
        className="submit-btn1 text-white"
        onClick={() => checkoutHandler(amount1)}
      >
        Pay Now
      </Button>
    </VStack>
  );
};

export default Card1;
