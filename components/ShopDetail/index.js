import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import ProductList from "../ProductList";

const ShopDetail = ({ route, navigation }) => {
  const productReducer = useSelector((state) => state.productReducer);

  const { shop } = route.params;
  const shopLoading = useSelector((state) => state.shopReducer.loading);

  if (shopLoading || productReducer.loading) return <Loading />;

  const productsFromShop = shop.products.map((product) =>
    productReducer.products.find((_product) => _product.id === product.id)
  );
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text onPress={() => navigation.push("Home")}>Take me home</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: shop.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
      </Card>
      <ProductList products={productsFromShop} />
    </View>
  );
};

export default ShopDetail;
