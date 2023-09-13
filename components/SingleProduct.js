'use client'
import Link from "next/link";
import React, { useState } from "react";


const SingleProduct = () => {
    const [isAdding, setIsAdding] = useState(false);
  return (
    <Link href='/products'>
      <div>
        <img src='/pizza.png' alt="" />
        <div className="text-center">
          <h3 className="text-lg font-bold my-1"> Peproni </h3>
          <span className="bg-grey-200 rounded-full text-sm px-2">
            small
          </span>
        </div>
        <div className="flex items-center justify-between mt-1 px-4 pl-6">
          <span className="font-bold text-sm ">Rs.500</span>
          <button
            // onClick={(e) => {
            //   addToCart(e, props.products);
            // }}
            className={`${
              isAdding ? `bg-green-500 ` : `bg-yellow-500 `
            }py-1 rounded-full font-bold px-2 text-sm`}
          >
            Add{isAdding ? `ed` : ``}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
