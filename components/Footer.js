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
      <div className="FooterContainer pt-5 pb-5 text-center">
        <p>
          need help? email:{' '}
          <a href="mailto:gshubham8@gmail.com">gshubham8@gmail.com</a>
        </p>
        <p className="FooterSocialLinks">
          <AiOutlineInstagram className="FooterSocialLink" />
          <AiOutlineFacebook className="FooterSocialLink" />
          <AiOutlineTwitter className="FooterSocialLink" />
          <AiOutlineYoutube className="FooterSocialLink" />
        </p>
        <small className="pt-1">Copyright © 2022 Shubham Gaikwad</small>
      </div>
    </div>
  );
};

export default Footer;
