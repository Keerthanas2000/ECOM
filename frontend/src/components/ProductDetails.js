import React from "react";
import "./details.css";

function ProductDetails({ prod }) {

  console.log("prodd", prod)
  return (
    <>
      <section id="product-info" className="product-info-section">
        <div className="product-container">
          <div className="images-section">
            <div className="item-image-main">
              <img src={prod?.image}  />
            </div>

          
          </div>

          <div className="item-info-parent">
            <div className="main-info">
              <h4>{prod?.title}</h4>
              <div className="star-rating">
                <span>★★★★</span>★
              </div>
              <p>
                Price: <span id="price">₹ {prod?.price}</span>
              </p>
            </div>

            <div className="select-items">
              <div className="description">
                <h5>Description</h5>
                <p>{prod?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
