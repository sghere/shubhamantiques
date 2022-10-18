import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {

  const [VisitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/shubhamantiques.shop/visits").then(res=>res.json()).then(result=>setVisitCount(result.value));  
  }, [])
  

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
        <br /><br />
        <p>Visit Count: {VisitCount}</p>
      </div>
    </div>
  );
};

export default Footer;
