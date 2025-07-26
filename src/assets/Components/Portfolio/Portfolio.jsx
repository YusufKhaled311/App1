import React, { useState } from "react";
import img1 from "./../../Images/imgi_1_poert1.png";
import img2 from "./../../Images/imgi_2_port2.png";
import img3 from "./../../Images/imgi_3_port3.png";
import Display from "../display/Display";

import { Helmet } from 'react-helmet';

import PortfolioStyle from "./Portfolio.module.css";

export default function Portfolio() {
  const [portfolio] = useState([
    { portfolio_img: img1, id: 1 },
    { portfolio_img: img2, id: 2 },
    { portfolio_img: img3, id: 3 },
    { portfolio_img: img1, id: 4 },
    { portfolio_img: img2, id: 5 },
    { portfolio_img: img3, id: 6 },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>

    <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>
      <div className="py-5">
        <div className="container text-center py-5 primary-color">
          <div className="mb-4">
            <h2 className="text-uppercase fs-40 fw-700">portfolio section</h2>
            { <span className={`py-2 star ${PortfolioStyle.dark}`}>
              
                  <i class="fa-solid fa-star"></i>
               
            </span> }
          </div>

          <div className="row g-5">
            {" "}
            {portfolio.map((item) => (
              <Display
                key={item.id}
                portfolio_img={item.portfolio_img}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="modal d-block bg-dark bg-opacity-75"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0">
                <img
                  src={selectedImage}
                  alt="popup"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
