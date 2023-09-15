"use client";

import Products from "@/components/Products";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        const data = response.data;
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="hero py-16">
        <div className="flex items-center justify-between ">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Lets Buy Something</em>
            </h6>
            <h1 className="text-3lx md:text-6xl font-bold">Don't Wait</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img src="/girl.png" height={500} alt="hero" className="w-4/5" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Products products={products} />
      </div>
    </>
  );
}
