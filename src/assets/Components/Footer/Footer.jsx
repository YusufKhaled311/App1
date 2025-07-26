import React from "react";


import FooterStyle from  './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={` primary-bg `}>
        <div className="container py-5">
          <div className="row py-5 gy-4">
            <div className="col-md-4 ">
              <div className=" d-flex flex-column align-items-center justify-content-center text-white">
                <h3 className="text-uppercase  fs-28 fw-500">LOCATION</h3>
                <span className="text-capitalize fs-16 fw-400 pt-1">
                  2215 John Daniel Drive
                </span>
                <span className="fs-16 fw-400 pt-3">Clark, MO 65243</span>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className=" d-flex flex-column align-items-center justify-content-center text-white">
                <h3 className="text-uppercase  fs-28 fw-500">around the web</h3>

                <div className="social-icons d-flex pt-2 ">
                  <div className={`${FooterStyle.icon} mx-1 d-flex justify-content-center align-items-center`}>
                    <i className="fa-brands fa-facebook "></i>
                  </div>
                   <div className={`${FooterStyle.icon} mx-1 d-flex justify-content-center align-items-center`}>
                    <i className="fa-brands fa-twitter "></i>
                  </div>
                   <div className={`${FooterStyle.icon} mx-1 d-flex justify-content-center align-items-center`}>
                    <i className="fa-brands fa-linkedin-in "></i>
                  </div>
                   <div className={`${FooterStyle.icon} mx-1 d-flex justify-content-center align-items-center`}>
                    <i className="fa-brands fa-firefox-browser"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className=" d-flex flex-column align-items-center justify-content-center text-white text-center">
                <h3 className="text-uppercase  fs-28 fw-500">
                  ABOUT FREELANCER
                </h3>
                <span className="text-capitalize fs-16 fw-400 pt-1">
                  Freelance is a free to use, licensed Bootstrap <br /> theme
                  created by Route{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" dark-bg text-white  text-center py-4">
        <span className="fs-14 fw-400">Copyright © Your Website 2025</span>
      </div>
    </>
  );
}
