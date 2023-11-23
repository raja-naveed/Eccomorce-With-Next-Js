import Products from '@/components/Products'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const index = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Products products={products} />
    </div>
  )
}

export default index;
