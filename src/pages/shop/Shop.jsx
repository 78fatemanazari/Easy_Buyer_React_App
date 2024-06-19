import React from 'react';
import { PRODUCTS } from '../../data/products';
import Product from './product.js';

const Shop = () => {
    return (
        <React.Fragment>
          <div className='row'>
            {PRODUCTS.map((productData) => <Product data={productData} key={productData.id} />)}
          </div>
        </React.Fragment>
    );
}

export default Shop;