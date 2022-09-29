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
  const [LoginToggle, setLoginToggle] = useState(false);

  return (
    <nav className="topnav">
      {/* <div class=" "> */}
      <div class="navbar-logo">
        <Link href="/">
          <a className="navitem logo">Shubham Antiques</a>
        </Link>
      </div>
      <ul
        className={
          'topnav-links hide-sm ' + (ToggleNavbar ? '' : 'openmenu Show')
        }
      >
        <Link href="/shop">
          <li className="navitem">Shop</li>
        </Link>
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
        <li className="navitem" onClick={() => setLoginToggle(!LoginToggle)}>
          {Theme ? <BsEmojiSunglasses /> : <BsEmojiSunglassesFill />}
        </li>
        <li
          className="navitem show-sm"
          onClick={() => setToggleNavbar(!ToggleNavbar)}
        >
          {ToggleNavbar ? <GiHamburgerMenu /> : <ImCross />}
        </li>
      </ul>
      <div className={'loginContainer ' + (LoginToggle ? 'Show' : 'Hide')}>
        LOGIN
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
