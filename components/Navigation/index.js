import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopDetail from "../ShopDetail";
import ShopList from "../ShopList";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import ProductDetail from "../ProductDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          //   cardStyle: {
          //     backgroundColor: "pink",
          //   },
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#90d4ed" },
        }}
      >
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="ShopList"
          component={ShopList}
          options={({ navigation }) => ({
            title: "Choose a Shop",
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        />
        <Screen
          name="ShopDetail"
          component={ShopDetail}
          options={({ route, navigation }) => {
            return {
              title: route.params.shop.name,
              headerRight: () => <CartButton navigation={navigation} />,
            };
          }}
        />
        <Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ route, navigation }) => {
            return {
              title: route.params.product.name,
              headerRight: () => <CartButton navigation={navigation} />,
            };
          }}
        />
        <Screen name="CartList" component={CartList} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
