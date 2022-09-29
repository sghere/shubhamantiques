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
    <>
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
            <li className="navitem">shop</li>
          </Link>
          <li className="navitem">login</li>
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

        {/* </div> */}
      </nav>
      <div className={'modalContainer ' + (LoginToggle ? 'Show' : 'Hide')}>
        <div class="modalCard">
          <div className="modalHeader">
            <h1>login</h1>
            <div
              className="modalCloseBtn"
              onClick={() => setLoginToggle(!LoginToggle)}
            >
              <ImCross />
            </div>
          </div>
          <div class="modalBody">
            <input className="input" placeholder="username" type="text" />
            <input className="input" placeholder="password" type="text" />
            <button className="btn">enter the game</button>
            <hr />
            <button className="btn btn-white">with google</button>
            <button className="btn btn-blue">with facebook</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
