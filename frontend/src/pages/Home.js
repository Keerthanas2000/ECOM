import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Ads from "../components/Ads";
import ProductSection from "../components/ProductSection";
function Home() {
  let Productarr = ["iphone 11", "iphone 12", "iphone 13", "iphone 14"];
  return (
    <div className="container  ">
      <Navbar />

      <Carousel />

      <div className="row">
          {Productarr.map((el) => (
            <Ads name={el} />
          ))}
      </div>
{/* <Productitem/> */}

<ProductSection/>
    </div>
  );
}

export default Home;
