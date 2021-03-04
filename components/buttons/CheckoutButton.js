import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Styling
import { Button, Text } from "native-base";
import { Alert } from "react-native";

// Actions
import { checkout } from "../../store/actions/cartActions";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.authReducer.user);

  const handlePress = () => {
    if (user) dispatch(checkout());
    else {
      Alert.alert(
        "Alert Title",
        "Sign in to place an order!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Sign in",
            onPress: () => navigation.navigate("Signin"),
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button block dark onPress={handlePress}>
      <Text>Checkout</Text>
    </Button>
  );
};

export default CheckoutButton;
