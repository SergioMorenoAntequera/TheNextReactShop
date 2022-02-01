import React, { useEffect, useState } from 'react';
import axios from "axios"

export default function useGetApiData(API) {
    const [products, setProducts] = useState([]);

	useEffect( async () => {
	  let response = await axios(API)
	  setProducts(response.data)
	}, []);

    return products;
}
