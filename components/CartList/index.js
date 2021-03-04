import { Button, List, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import Loading from "../Loading";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

const CartList = () => {
  const dispatch = useDispatch();

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
        <Button block dark onPress={() => dispatch(checkout())}>
          <Text>Checkout</Text>
        </Button>
      )}
    </View>
  );
};

export default CartList;
