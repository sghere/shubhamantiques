import Link from "next/link";
import React, { useState } from "react";

import {
  BsFillSunFill,
  BsMoonStars,
  BsEmojiSunglasses,
  BsEmojiSunglassesFill,
  BsSunFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Modal from "./Modal";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoginForm } from "../redux/togglerSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [ToggleNavbar, setToggleNavbar] = useState(true);
  const LoginForm = useSelector((state) => state.toggler.LoginForm);
  const Theme = useSelector((state) => state.toggler.Theme);

  return (
    <>
      <nav className="topnav">
        {/* <div className=" "> */}
        <div className="navbar-logo">
          <Link href="/">
            <a className="navitem logo">
              <img src="/images/Logo.svg" height="35px" alt="Logo" />
            </a>
          </Link>
        </div>
        <ul
          className={
            "topnav-links hide-sm " + (ToggleNavbar ? "" : "openmenu Show")
          }
        >
          <Link href="/about">
            <li className="navitem">about</li>
          </Link>
          <Link href="/shop">
            <li className="navitem">shop</li>
          </Link>
          <Link href="/careers">
            <li className="navitem">careers</li>
          </Link>
        </ul>
        <ul className="topnav-links">
          <li className="navitem" onClick={() => dispatch(toggleTheme())}>
            {Theme ? <BsMoonStars /> : <BsSunFill />}
          </li>
          <li className="navitem" onClick={() => dispatch(toggleLoginForm())}>
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
      <Modal
        ModalToggle={LoginForm}
        setModalToggle={() => dispatch(toggleLoginForm())}
      >
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
