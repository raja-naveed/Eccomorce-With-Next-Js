import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { add } from "@/redux/cartSlice";
import CryptoJS from 'crypto-js';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      const encryptedProductId = router.query.id;
      if (encryptedProductId) {
        try {
          const decryptedBytes = CryptoJS.AES.decrypt(encryptedProductId, 'secret_key');
          const decryptedProductId = decryptedBytes.toString(CryptoJS.enc.Utf8);
          
          const response = await axios.get("/data/data.json");
          const data = response.data;
  
          // Find the product with the specified ID
          const foundProduct = data.find(item => item.id.toString() === decryptedProductId);
  
          setProduct(foundProduct);
        } catch (error) {
          console.error("There was a problem with the Axios request:", error);
        }
      }
    };

    fetchData();
  }, [router.query.id]); // Trigger the effect when router.query.id changes

  const addToCartt = (e) => {
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
  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold">Go Back</button>
      {product ? (
        <div className="flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-cover"
          />
          <div className="ml-16">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="text-md text-gray-500">{product.category}</div>
            <div className="font-bold text-2xl mt-2">₹ {product.price}</div>
            <button
            onClick={(e)=>{addToCartt(e)}}
            className={`${
                isAdding ? `bg-green-500 ` : `bg-yellow-500 `
              }py-1 px-8 rounded-full font-bold mt-4`}>
              Add{isAdding ? `ed` : ``} to Cart
            </button>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Description:</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Product;
