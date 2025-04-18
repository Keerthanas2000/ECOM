import React from 'react';
import IconList from './IconList';

function Productitem(props) {
  return (
    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div className="product">
        <img
        style={{height:"50vh", width:"auto"}}
          src={props.prod.image}
          alt={props.prod.title}
        />
      <IconList  prod={props.prod}/>
      </div>
      <div className="tag bg-red">sale</div>
      <div className="title pt-4 pb-1">{props.prod.title}</div>
      <div className="d-flex align-content-center justify-content-center">
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
      </div>
      <div className="price">&#8377;&nbsp;{parseFloat(props.prod.price).toFixed(2)}</div>    </div>
  );
}




export default Productitem;
