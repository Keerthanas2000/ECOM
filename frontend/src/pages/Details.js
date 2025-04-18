import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar'; 
import ProductDetails from '../components/ProductDetails';

function Details() {
      const prod = useSelector((state) => state.currentProduct?.prod);

  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>      

      <div className="container">
        <ProductDetails prod={prod} />
      </div>
    </>
  );
}

export default Details;
