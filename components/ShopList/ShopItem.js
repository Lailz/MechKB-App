import { ListItem } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { ShopItemStyled } from "./styles";

const ShopItem = ({ shop }) => {
  return (
    <ListItem>
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
