import React from 'react';
import DiplayStyle from './Display.module.css';

export default function Display({ portfolio_img, onImageClick }) {
  return (
    <div className="col-md-4">
      <div
        className={`${DiplayStyle.portfolio_image} position-relative`}
        onClick={() => onImageClick(portfolio_img)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={portfolio_img}
          alt="portfolio"
          className="w-100 rounded-3"
        />
        <div className={`${DiplayStyle.layer} rounded-3 d-flex justify-content-center align-items-center`}>
          <i class="fa-solid fa-plus text-white "></i>
        </div>
      </div>
    </div>
  );
}
