import { ListItem } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { ShopItemStyled } from "../ShopList/styles";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
