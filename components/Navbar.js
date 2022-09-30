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
import Modal from './Modal';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/themeSlice';

const Navbar = () => {
  const [ToggleNavbar, setToggleNavbar] = useState(true);
  const [LoginToggle, setLoginToggle] = useState(false);

  const Theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="topnav">
        {/* <div className=" "> */}
        <div className="navbar-logo">
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
        </ul>
        <ul className="topnav-links">
          <li className="navitem" onClick={() => dispatch(toggle())}>
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
      <Modal ModalToggle={LoginToggle} setModalToggle={setLoginToggle}>
        <input className="input" placeholder="username" type="text" />
        <input className="input" placeholder="password" type="text" />
        <button className="btn">enter the game</button>
        <hr />
        <button className="btn btn-white">with google</button>
        <button className="btn btn-blue">with facebook</button>
      </Modal>
    </>
  );
};

export default Navbar;
