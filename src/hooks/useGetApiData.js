import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetApiData(API) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(API);
      setProducts(response.data);
    }
    fetchData();
  }, [API]);

  return products;
}
