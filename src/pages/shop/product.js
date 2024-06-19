import React from 'react';

const Product = (props) => {
  const {productName, productImage, price} = props.data;
    return (
      <div className='col-2'>
        <img src={productImage} className='w-100' alt='' />
        <h5>{productName}</h5>
        <p>Price: {price}$</p>
        <button className='btn btn-info btn-sm'>+</button>
        <span className='mx-1'>0</span>
        <button className='btn btn-info btn-sm'>-</button>
      </div>
    );
}

export default Product;