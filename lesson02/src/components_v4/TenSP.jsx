import React from "react";

function Product({ name }) {
  return <h3>{name}</h3>;
}

export default function TenSP() {
  return (
    <div>
      <Product name="Laptop" />
      <Product name="Điện thoại" />
    </div>
  );
}
