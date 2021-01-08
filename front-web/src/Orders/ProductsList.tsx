import React from "react";
import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import "./styles.css";
import { Product } from "./types";

type Props = {
  products: Product[];
  onSelecProduct: (product: Product) => void;
  selectedProducts: Product[];
};

function ProductsList({ products, onSelecProduct, selectedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelecProduct={onSelecProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
