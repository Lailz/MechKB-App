import { Body, Icon, ListItem, Right, Text } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
      </Body>
      <Right>
        <Icon
          name="trash"
          type="Ionicons"
          onPress={() => dispatch(removeItemFromCart(item.id))}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
