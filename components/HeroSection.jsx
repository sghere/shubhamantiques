import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoginForm } from '../redux/togglerSlice';

const HeroSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const LandingSection = ({
    id,
    text1,
    htext,
    text2,
    blinktext,
    loginToggle,
    link,
  }) => {
    return (
      <div id={id} className="HeroSection2">
        <h1>
          {text1} <span className="gradient"> {htext}</span> {text2}
        </h1>
        <h4
          className="blinkAnim pt-2 landingLinks"
          onClick={
            loginToggle
              ? () => dispatch(toggleLoginForm())
              : () => router.push('/#' + link)
          }
        >
          {blinktext}
        </h4>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div id="section1" className="HeroSection">
          <div className="grid fr2">
            <div className="grid place-center">
              <h1 className="text-center">
                decorate yourself with
                <span className="gradient"> timeless</span> things
                <br />
                <button className="btn">start shopping</button>
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
        <LandingSection
          id="section2"
          text1="things those are"
          htext="awaiting"
          text2="to meet you"
          blinktext="lets explore...🥰"
          link="section3"
        />
        <LandingSection
          id="section3"
          text1="gift an antique to your antique "
          htext="ones"
          text2=" "
          blinktext="lets goo...🤯"
          link="section4"
        />
        <LandingSection
          id="section4"
          text1="your  "
          htext="children’s children"
          text2=" will cherish it more."
          blinktext="login now to buy fabulous...🤩"
          loginToggle={true}
        />
      </div>
    </>
  );
};

export default HeroSection;
