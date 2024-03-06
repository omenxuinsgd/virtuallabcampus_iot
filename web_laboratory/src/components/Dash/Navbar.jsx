import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from '../../features/authSlice';
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LabelLogo, DropdownContainer, DropdownItem, DropdownSymbol
} from "../Header/styles";
import './styles.css'

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { user } = useSelector((state) => state.auth);

  const laman = () => {
    // dispatch(LogOut());
    // dispatch(reset());
    navigate.push("/");
  };

  return (
    <div>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <SvgIcon src="logo-uin.png" width="28px" height="28px" />
              <LabelLogo  style={{fontSize:'14px'}}>
                  Laboratorium Fisika <br />
                  Fakultas Sains dan Teknologi <br />
                  UIN Sunan Gunung Djati Bandung
              </LabelLogo>
            </NavLink>
        
            <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            {/* <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span> */}
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={laman} className="button is-light">
                  Halaman Utama
                </button>
              </div>
            </div>
          </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar