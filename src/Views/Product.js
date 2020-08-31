import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpsRequests';

function Product(){
    const { id } = useParams();
    const url = `https://5f4bcd53ea007b0016b1dbf3.mockapi.io/api/v1/products/${id}`;

    let product = useAxiosGet(url)

    let content = null;

    if(product.error){
        content = 
        <p>
            There was an error please try again later.
        </p>;
    }

    if(product.loading){
        content = <Loader/>;
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    ${product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    };

    return(
        <div>
            {content}
        </div>
    );
};

export default Product;