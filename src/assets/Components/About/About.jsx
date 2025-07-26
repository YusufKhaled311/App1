import React from "react";

import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>


    <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>


      <div className="py-5 secondary-bg ">
        <div className="container py-5">
          <div className="row text-white px-5">
            <div className="col-12 pt-5  pb-3 ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-uppercase fs-40 fw-700">
                  {" "}
                  about component{" "}
                </h2>
                { <span className={`py-2 star`}>
                  <i class="fa-solid fa-star"></i>
                </span> }
              </div>
            </div>

            <div className="col-md-6 ps-md-5">
              <div >
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6 pe-5 pe-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
