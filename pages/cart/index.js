import { decrement, deleteItem, increment, resetCart } from "@/redux/cartSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  // console.log(products);
  const dispatch = useDispatch();
  const incrementQty = (id) => {
    dispatch(increment(id));
  };

  const decrementQty = (id) => {
    dispatch(decrement(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  };
  const calculateProductTotal = (product) => {
    return product.quantity * product.price;
  };
  const handleResetCart = () => {
    alert("Order Placed Successfully");
    dispatch(resetCart());
  };
  
  return products.length ? (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Products</h1>
      <hr />
      <ul>
        {products.map((product) => {
          const productTotal = calculateProductTotal(product); 
          return (
            <li className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16" src={product.image} alt="" />
                  <span className="font-bold ml-4 w-48">{product.title}</span>
                </div>
                <div>
                  <button
                    onClick={() => decrementQty(product.id)}
                    className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    -
                  </button>
                  <b className="px-4"> {product.quantity}</b>
                  <button
                    onClick={() => incrementQty(product.id)}
                    className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    +
                  </button>
                </div>
                <span>{productTotal}</span>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <span className="font-bold">Total: Rs{getTotal()} </span>
      </div>
      <div className="flex justify-end">
        <button 
        onClick={handleResetCart}
        className="bg-yellow-500 text-white rounded-full px-4 py-2 mt-4">
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <>
      <img className="mx-auto w-1/4 mt-12" src="/empty-cart.png" alt="" />
      <h1 className="font-bold text-center mt-12 my-auto">
        Your Cart is Empty
      </h1>
    </>
  );
};

export default Cart;
