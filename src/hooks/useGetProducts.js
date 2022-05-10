import { useEffect, useState } from 'react';
import axios from 'axios';



const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        try {
            const response = await axios(API);
            setProducts(response.data);
        } catch (error) {
            setProducts([]);
        }
    }, [])

    return products;
}

export default useGetProducts;