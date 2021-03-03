import { List } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const loading = useSelector((state) => state.shopReducer.loading);
  const shopList = shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop.id} />
  ));
  if (loading) return <Loading />;
  return <List>{shopList}</List>;
};

export default ShopList;
