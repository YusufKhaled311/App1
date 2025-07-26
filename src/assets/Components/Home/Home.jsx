import React from "react";

import homeImg from "../../Images/imgi_1_avataaars.svg";

import homeStyle from "./Home.module.css";

import { Helmet } from 'react-helmet';
export default function Home() {
  return (


    
    <>

<div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>
     
      <div className="secondary-bg pt-5">
       <div className="container">
         <div className="row pt-3">
          <div className="col-12  ">
            <div className={`${homeStyle.home_content} d-flex justify-content-center align-items-center flex-column`}>
              <img src={homeImg} alt=" home image" />
              <h1 className="text-uppercase text-center text-white pt-4 fs-40 fw-700">
                start Framework
              </h1>

            { <span className={`py-2 star`}>
                  <i class="fa-solid fa-star text-white"></i>
                </span> }
            <span className="pb-3 text-white">Graphic Artist - Web Designer - Illustrator</span>
         
         
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
