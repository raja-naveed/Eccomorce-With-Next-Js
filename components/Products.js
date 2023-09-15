"use client";

import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-3">Products </h1>
        <div className="grid grid-cols-5 gap-x-24 gap-y-9 my-1">
          {products ? (
            products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
