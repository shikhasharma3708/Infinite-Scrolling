import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCard = ({ data }) => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className="col-md-4 mb-4">
      <div data-aos="fade-up" className="card">
        <div className="card-body" data-aos="zoom-in-right">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text"><strong>Price:</strong> ${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
