import Link from 'next/link';
import React from 'react';

import {
  BsFillSunFill,
  BsMoonStars,
  BsEmojiSunglasses,
  BsEmojiSunglassesFill,
  BsSunFill,
} from 'react-icons/bs';

const Navbar = ({ Theme, setTheme }) => {
  return (
    <nav className="topnav">
      <div class="navbar-logo">
        <Link href="/">
          <a className="navitem logo">Shubham Antiques</a>
        </Link>
      </div>
      <ul className="topnav-links">
        <li className="navitem">Shop</li>
        <li className="navitem">Login</li>
      </ul>
      <ul className="topnav-links">
        <li
          className="navitem"
          onClick={() => {
            setTheme(!Theme);
          }}
        >
          {Theme ? <BsMoonStars /> : <BsSunFill />}
        </li>
        <li className="navitem">
          {Theme ? <BsEmojiSunglasses /> : <BsEmojiSunglassesFill />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
