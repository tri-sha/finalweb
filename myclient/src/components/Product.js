// eslint-disable-next-line
import React, { Component } from 'react'
//import '../css/Product.css';
function Product(props) {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}images/phone.jpg`}     
          width="100"
          height="100"
          alt="phone"
        />
        Price:{props.price}
        name:{props.name}
      </div>
    )
  }

  export default Product;