import Link from 'next/link';
import React, { useState } from 'react';

import {
  BsFillSunFill,
  BsMoonStars,
  BsEmojiSunglasses,
  BsEmojiSunglassesFill,
  BsSunFill,
} from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = ({ Theme, setTheme }) => {
  const [ToggleNavbar, setToggleNavbar] = useState(true);

  return (
    <nav className="topnav">
      <div class="navbar-logo">
        <Link href="/">
          <a className="navitem logo">Shubham Antiques</a>
        </Link>
      </div>
      <ul
        className={'topnav-links hide-sm ' + (ToggleNavbar ? '' : 'openmenu')}
      >
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
        <li
          className="navitem show-sm"
          onClick={() => setToggleNavbar(!ToggleNavbar)}
        >
          {ToggleNavbar ? <GiHamburgerMenu /> : <ImCross />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
