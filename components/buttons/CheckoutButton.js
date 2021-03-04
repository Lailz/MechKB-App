import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Button, Text } from "native-base";

// Actions
import { checkout } from "../../store/actions/cartActions";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const handlePress = () => {
    if (user) dispatch(checkout());
    else alert("sign in please");
  };
  return (
    <Button block dark onPress={handlePress}>
      <Text>Checkout</Text>
    </Button>
  );
};

export default CheckoutButton;
