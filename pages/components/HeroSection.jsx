import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="HeroSection">
          <div className="grid fr2 pt-5">
            <div className="grid place-center">
              <h1 className="text-center">
                decorate yourself with
                <span className="gradient"> timeless things</span>
                <br />
                <button className="btn">get started</button>
              </h1>
            </div>
            <div className="grid place-center">
              <video autoPlay muted loop className="videoTag">
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
