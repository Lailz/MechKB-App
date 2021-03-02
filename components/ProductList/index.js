import { List } from "native-base";
import React from "react";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <List>{productList}</List>;
};

export default ProductList;
