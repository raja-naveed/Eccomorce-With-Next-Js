"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState();

  const MINIMUM_DELAY_MS = 1000; // Adjust this as needed

  useEffect(() => {
    const makeRequest = async () => {
      const options = {
        method: "GET",
        url: "https://aliexpress-datahub.p.rapidapi.com/item_detail",
        params: {
          itemId: "3256804591426248",
        },
        headers: {
          "X-RapidAPI-Key":
            "0a05df5d71msh8eeba2697e0fe01p160a1djsn6ba71765b23e",
          "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);

        if (error.response && error.response.status === 429) {
          // Retry the request after a delay
          setTimeout(() => {
            makeRequest();
          }, MINIMUM_DELAY_MS);
        }
      }
    };

    makeRequest();
  }, []);

  return (
    <div>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-3">Products </h1>
        <div className="grid grid-cols-5 gap-x-24 gap-y-9 my-1">
          {/* {products.map((product) => (
            <Product key={product._id} products={product} />
          ))} */}
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
