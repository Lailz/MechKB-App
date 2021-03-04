import React from "react";
import { useSelector } from "react-redux";

// Styling
import { List, Text } from "native-base";
import { View } from "react-native";

// Components
import CheckoutButton from "../buttons/CheckoutButton";
import Loading from "../Loading";
import CartItem from "./CartItem";

const CartList = () => {
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  if (loading) return <Loading />;

  const cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((product) => <CartItem item={product} key={product.id} />);

  return (
    <View>
      <List>{cartList}</List>
      {items.length === 0 ? (
        <Text>There are no items in the cart</Text>
      ) : (
        <CheckoutButton />
      )}
    </View>
  );
};

export default CartList;
