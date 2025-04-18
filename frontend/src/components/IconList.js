import React from "react";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../actions/setCurrentProduct"; 
import { useDispatch } from "react-redux";

function IconList({ prod }) { 
  const dispatch = useDispatch();

  const handleCurrProd = () => {
    dispatch(setCurrentProduct(prod));
  };

  return (
    <>
      <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
        <Link to={{ pathname: '/details/' }} onClick={handleCurrProd}>
          <li className="icon">
            <span className="fas fa-expand-arrows-alt"></span>
          </li>
        </Link>
        <Link to="#" onClick={() => alert("Add to Wishlist")}>
          <li className="icon mx-3">
            <span className="far fa-heart"></span>
          </li>
        </Link>
        <Link to="#" onClick={() => alert("product added to cart")}>
          <li className="icon">
            <span className="fas fa-shopping-bag"></span>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default IconList;