'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";
import { useSnackbar } from "notistack";
import CryptoJS from 'crypto-js';



const SingleProduct = ({product}) => {
    const {title, id, price , category, image } = product;
    const [isAdding, setIsAdding] = useState(false);
    const cart =useSelector((state) => state.cart);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();


    const addToCartt = (e)=> {
      e.preventDefault();
      dispatch(add(product));
      enqueueSnackbar(`Item added to your cart successfully`, {
        variant: "success",
        autoHideDuration: 3000,
      });

      setIsAdding(true);
      setTimeout(() => {
  
        setIsAdding(false);
  
      }, 1000);
    }
   
    const encrypted = CryptoJS.AES.encrypt(id.toString(), 'secret_key').toString();
    const encoded = encodeURIComponent(encrypted);
    
const encryptedProductId = encoded;
  return (

    <Link href={`/product/${encryptedProductId}`}>
      <div>
        <div className="h-[180px]">
      <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>      
          <div className="text-center">
          <h3 className="namee text-lg font-bold my-1">{title}</h3>
          <span className="bg-grey-200 rounded-full text-sm px-2">
           {category}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1 px-4 pl-6">
          <span className="font-bold text-sm ">{price}</span>
          <button
          onClick={(e)=>{addToCartt(e)}}
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
