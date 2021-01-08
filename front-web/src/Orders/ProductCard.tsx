import React from "react";
import { fotmatPrice } from "./helpers";
import "./styles.css";
import { Product } from "./types";

type Props = {
  product: Product;
  onSelecProduct: (product: Product) => void;
  isSelected: boolean;
};

function ProductCard({ product, onSelecProduct, isSelected }: Props) {
  return (
    <div
      className={`order-card-container ${isSelected ? "selected" : ""}`}
      onClick={() => onSelecProduct(product)}
    >
      <h3 className="order-card-title">{product.name}</h3>
      <img
        src={product.imageUri}
        alt={product.name}
        className="order-card-image"
      />
      <h3 className="order-card-price">{fotmatPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
