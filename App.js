import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./components/Home";
import ShopDetail from "./components/ShopDetail";
import ShopList from "./components/ShopList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        {/* <Home /> */}
        {/* <ShopList /> */}
        <ShopDetail />
      </View>
    </Provider>
  );
}
