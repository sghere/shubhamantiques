import Link from 'next/link';
import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="container">
      <hr />
      <div className="FooterContainer pt-5 pb-5 text-center">
        <p>
          need help? email:{' '}
          <a href="mailto:info@shubhamantiques.shop">
            info@shubhamantiques.shop
          </a>
        </p>
        <p className="FooterSocialLinks">
          <a
            className="FooterSocialLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/shubhamantiques"
          >
            <AiOutlineInstagram />
          </a>
          <a
            className="FooterSocialLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/maheshgaikwad321/"
          >
            <AiOutlineFacebook className="FooterSocialLink" />
          </a>
          <a
            className="FooterSocialLink"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send/?phone=%2B918655301910&text=Hi, Checked your Shubham Antiques Website."
          >
            <AiOutlineWhatsApp className="FooterSocialLink" />
          </a>
          {/* <Link>
            <AiOutlineYoutube className="FooterSocialLink" />
          </Link> */}
        </p>
        <small className="pt-1">Copyright © 2022 Shubham Gaikwad</small>
      </div>
    </div>
  );
};

export default Footer;
