import React from "react";
import "./UserExp.css";

export default function UserExp({ userText, type, text }) {
  return (
    <section className={type === "CUSTOMER" ? "customer-main" : "vendor-main"}>
      <div className="margin-class dark-bg-section">
        {type === "CUSTOMER" && (
          <div className="position-section">
            <img
              src={process.env.PUBLIC_URL + "/images/vasiti-bg-section2.svg"}
              alt="background-image"
            />
          </div>
        )}
        <div className="section-flex">
          <div className="position-child">
            <div className={type === "CUSTOMER" ? "flex-child" : "flex-vendor"}>
              <h3>{userText}</h3>
              <p className={type === "CUSTOMER" ? "child-1" : "vendor-1"}>
                {type}
              </p>
              <p className={type === "CUSTOMER" ? "child-2" : "vendor-2"}>
                {" "}
                {text}
              </p>
            </div>

            <div className="story-div">
              <p className={type === "CUSTOMER" ? "black-clr" : "orange-clr"}>
                {" "}
                <a href="/vendor">
                SHARE YOUR OWN STORY!</a>
              </p>

              <img
                className={
                  type === "CUSTOMER" ? "customer-image" : "vendor-image"
                }
                src={process.env.PUBLIC_URL + "/images/vector1.svg"}
                alt="vector"
              />
            </div>
          </div>
        </div>
        {type === "VENDOR" && (
          <div className="vendor-img">
            <img
              className="image-1 display-responsive1"
              src={
                process.env.PUBLIC_URL +
                "/images/testimonial-images/vendor-images/vendor-image-main.svg"
              }
              alt="background-image"
            />

            <img
              className="image-2 display-responsive1"
              src={
                process.env.PUBLIC_URL +
                "/images/testimonial-images/vendor-images/vendor-image-main-sphere.svg"
              }
              alt="background-image"
            />

            <img
              className="image-1 display-responsive2"
              src={
                process.env.PUBLIC_URL +
                "/images/testimonial-images/vendor-images/vendor-mask-group.svg"
              }
              alt="background-image"
            />
          </div>
        )}{" "}
      </div>
    </section>
  );
}
