import React from "react";

function AddToCart({ product, onAdd }) {
  function handleAddClick() {
    // call parent-provided onAdd with product id
    onAdd(product.id);
  }

  return (
    <button onClick={handleAddClick}>
      Add {product.name} to cart
    </button>
  );
}

export default AddToCart;

