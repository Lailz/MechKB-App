import { Body, Button, Icon, Left, ListItem, Right } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ShopItemStyled } from "../ShopList/styles";
import { useNavigation } from "@react-navigation/native";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/actions/cartActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = {
      quantity, //quantity: quantity,
      productId: product.id,
    };
    dispatch(addItemToCart(newItem));
  };

  return (
    <ListItem>
      <Left>
        <ShopItemStyled
          onPress={() => navigation.navigate("ProductDetail", { product })}
        >
          {product.name}
        </ShopItemStyled>
      </Left>
      <Body>
        <NumericInput onChange={setQuantity} />
      </Body>
      <Right>
        <Icon type="Fontisto" name="shopping-basket-add" onPress={handleAdd} />
      </Right>
    </ListItem>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
