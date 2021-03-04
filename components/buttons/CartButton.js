import { Button, Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { CartTextStyled, CartButtonStyled } from "./styles";

const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.cartReducer.items);

  let total = 0;
  items.forEach((item) => (total += item.quantity));

  return (
    <Button transparent>
      <CartTextStyled>{total}</CartTextStyled>
      <CartButtonStyled
        type="FontAwesome5"
        name="luggage-cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </Button>
  );
  //   return (
  //     <ButtonNBStyled>
  //       <Text>NB</Text>
  //     </ButtonNBStyled>
  //   );
  //   return <ButtonRNStyled title="RN" />;
};

export default CartButton;
