import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpsRequests';

function Home(){
    const url = `https://5f4bcd53ea007b0016b1dbf3.mockapi.io/api/v1/products?page=1&limit=10`;

    let products = useAxiosGet(url)

    let content = null
    
    if(products.error){
        content = 
        <p>
            There was an error please try again later.
        </p>;
    }

    if(products.loading){
        content = <Loader/>;
    }

    if(products.data){
        content = 
            products.data.map((product, key) => 
                <div key={key}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
    };

    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    )
};

export default Home;