import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="container">
      <hr />
      <div class="FooterContainer pt-5 pb-5 text-center">
        Footer
        <p>need help? email: gshubham8@gmail.com</p>
        <p>
          <AiOutlineInstagram />
          <AiOutlineFacebook />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
        </p>
        <small>Copyright © 2022 Shubham Gaikwad</small>
      </div>
    </div>
  );
};

export default Footer;
