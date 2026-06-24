import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>

      <div className="preloader-heading">
        <div className="load-text">
          <span>M</span>
          <span>K</span>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>N</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
