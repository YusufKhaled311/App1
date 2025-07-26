import React, { useState } from "react";

import ContactStyle from "./Contact.module.css";

import { Helmet } from 'react-helmet';
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
   <>


   <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>
    <div className="py-5">
      <div className="container pt-5 text-center primary-color">
        <h2 className="text-uppercase fs-40 fw-700">contact section</h2>

        { <span className={`py-2 star ${ContactStyle.dark}`}>
          <i class="fa-solid fa-star"></i>
        </span> }

        <div className="container py-5 ">
          <div className="row justify-content-center align-items-center">
            {/* User Name Input */}
            <div className="col-md-7">
              <div className="d-flex flex-column align-items-start">
                <label
                  htmlFor="userNameInput"
                  className={
                    userName.trim() !== ""
                      ? ContactStyle.active
                      : ContactStyle.dis_active
                  }
                >
                  User Name :
                </label>
                <input
                  type="text"
                  className="text-capitalize form-control border-top-0 border-start-0 border-end-0"
                  id="userNameInput"
                  value={userName}
                  placeholder="user name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            {/* User Age Input */}
            <div className="col-md-7 mt-4">
              <div className="d-flex flex-column align-items-start">
                <label
                  htmlFor="userAgeInput"
                  className={
                    userAge.trim() !== ""
                      ? ContactStyle.active
                      : ContactStyle.dis_active
                  }
                >
                  User Age :
                </label>
                <input
                  type="number"
                  className="form-control border-top-0 border-start-0 border-end-0"
                  id="userAgeInput"
                  value={userAge}
                  placeholder="user age"
                  onChange={(e) => setUserAge(e.target.value)} // <- fixed
                />
              </div>
            </div>
            {/* User Email Input */}
            <div className="col-md-7 mt-4">
              <div className="d-flex flex-column align-items-start">
                <label
                  htmlFor="userEmailInput"
                  className={
                    userEmail.trim() !== ""
                      ? ContactStyle.active
                      : ContactStyle.dis_active
                  }
                >
                  User Email :
                </label>
                <input
                  type="Email"
                  className="form-control border-top-0 border-start-0 border-end-0"
                  id="userEmailInput"
                  value={userEmail}
                  placeholder="user Email"
                  onChange={(e) => setUserEmail(e.target.value)} // <- fixed
                />
              </div>
            </div>
            {/* User Password Input */}
            <div className="col-md-7 mt-4">
              <div className="d-flex flex-column align-items-start">
                <label
                  htmlFor="userPasswordInput"
                  className={
                    userPassword.trim() !== ""
                      ? ContactStyle.active
                      : ContactStyle.dis_active
                  }
                >
                  User Password :
                </label>
                <input
                  type="Password"
                  className="form-control border-top-0 border-start-0 border-end-0"
                  id="userPasswordInput"
                  value={userPassword}
                  placeholder="user Password"
                  onChange={(e) => setUserPassword(e.target.value)} // <- fixed
                />
              </div>
            </div>

            <div className="col-md-7 ">
              <div className="d-flex justify-content-start my-3">
                <button className="btn secondary-bg  text-white">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
   </>
  );
}
