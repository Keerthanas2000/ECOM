import React, { useEffect } from "react";

function Carousel() {
  useEffect(() => {
    const carousel = document.getElementById('carouselExampleIndicators');
    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', (event) => {
        // Get the current active item
        const activeItem = carousel.querySelector('.carousel-item.active');
        if (activeItem) {
          const activeCaption = activeItem.querySelector('.carousel-caption');
          if (activeCaption) activeCaption.classList.remove('fade-in');
        }
      });
      
      carousel.addEventListener('slid.bs.carousel', (event) => {
        // Get the newly active item
        const activeItem = carousel.querySelector('.carousel-item.active');
        if (activeItem) {
          const activeCaption = activeItem.querySelector('.carousel-caption');
          if (activeCaption) activeCaption.classList.add('fade-in');
        }
      });
      
      // Initialize first caption
      const firstCaption = carousel.querySelector('.carousel-item.active .carousel-caption');
      if (firstCaption) firstCaption.classList.add('fade-in');
    }
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <style>
        {`
          .carousel-item {
            transition: transform 0.6s ease-in-out;
          }
          
          .carousel-caption {
            opacity: 0;
            transition: all 0.7s ease;
            transform: translateY(20px);
          }
          
          .carousel-caption.fade-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .carousel-control-prev, .carousel-control-next {
            width: 5%;
            transition: all 0.3s ease;
            background-color: rgba(0,0,0,0.1);
          }
          
          .carousel-control-prev:hover, .carousel-control-next:hover {
            background-color: rgba(0,0,0,0.2);
          }
          
          .carousel-caption h3 {
            font-size: 2.5rem;
            font-weight: 700;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
            margin-bottom: 1rem;
          }
          
          .carousel-caption p {
            font-size: 1.2rem;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          }
        `}
      </style>
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      
      <div className="carousel-inner">
        <div style={{ height: "80vh" }} className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/portrait-excited-happy-shopaholic-woman-holding-shopping-bags-showing-plastic-credit-card-smi_1258-120063.jpg"
            alt="Happy woman shopping"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block text-end">
            <h3 style={{ color: "black" }}>Summer Sale</h3>
            <p style={{ color: "black" }}>Up to 50% off on all women's fashion</p>
          </div>
        </div>
        
        <div className="carousel-item" style={{ height: "80vh" }}>
          <img
            src="https://img.freepik.com/premium-photo/trendy-beautiful-young-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_772150-64.jpg?ga=GA1.1.822125197.1744857902&semt=ais_hybrid&w=740"
            className="d-block w-100 h-100"
            alt="Woman shopping online"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block text-end">
            <h3 style={{ color: "black" }}>Online Shopping</h3>
            <p style={{ color: "black" }}>Exclusive deals for our app users</p>
          </div>
        </div>
        
        <div className="carousel-item" style={{ height: "80vh" }}>
          <img
            src="https://img.freepik.com/premium-photo/fulllength-happy-attractive-asian-man-jumping-from-happiness-carry-shopping-bags-standing-yel_1258-54749.jpg?ga=GA1.1.822125197.1744857902&semt=ais_hybrid&w=740"
            className="d-block w-100 h-100"
            alt="Happy man shopping"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <h3 style={{ color: "black" }}>New Collection</h3>
            <p style={{ color: "black" }}>Fresh styles for the season</p>
          </div>
        </div>
      </div>
      
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;