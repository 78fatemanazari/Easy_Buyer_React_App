import React, { useContext } from 'react';
import { PRODUCTS } from '../../data/products';
import { shopContext } from '../../context/shopContext';
import Product from '../shop/product';

const Carts = () => {
    const {cartItems} = useContext(shopContext);
    return (
        <React.Fragment>
            <h1>Your Cart Items</h1>
            <div className='row'>
                {PRODUCTS.map((p)=>{
                    if(cartItems.some((i)=> i.id === p.id && i.count>0))
                        return <Product data={p}></Product>
                })}
            </div>
        </React.Fragment>
    );
}

export default Carts;