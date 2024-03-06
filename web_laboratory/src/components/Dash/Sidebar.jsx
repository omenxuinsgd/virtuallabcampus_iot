import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { FcBiomass, FcCollaboration, FcConferenceCall, FcDataRecovery, FcHome, FcInvite, FcKindle, FcMindMap, FcMultipleDevices, FcViewDetails} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from '../../features/authSlice';
import axios from "axios";
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
} from "../Header/styles"

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { user } = useSelector((state) => state.auth);
  const [labs, setLabs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPeminjamanOpen, setPeminjamanOpen] = useState(false);
  const [isJadwalOpen, setJadwalOpen] = useState(false);

  const togglePeminjamanMenu = () => {
    setPeminjamanOpen(!isPeminjamanOpen);
  };

  const toggleJadwalMenu = () => {
    setJadwalOpen(!isJadwalOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("http://localhost:5000/jadwal");
    setLabs(response.data);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate.push("/");
  };

  const CustomNavLink = ({ to, className, children, lab }) => (
    <NavLink to={{ pathname: to, state: { lab } }} className={className}>
      {children}
    </NavLink>
  );

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="navbar-burger burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
          
  
        <aside className={`menu pl-2 has-shadow is-narrow-mobile is-fullheight  ${isOpen ? 'is-visible' : 'is-hidden-mobile'}`}>
        <p className="menu-label mb-0 mt-5">General</p>
        <ul className="menu-list mb-3">
          <li>
            <NavLink to={"/dashboard"}>
              <FcHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/virtuallab"}>
              <FcMultipleDevices /> Virtual Lab
            </NavLink>
          </li>
          <li>
            <NavLink to={"/#"}>
              <FcMindMap /> Lab Berbasis IoT
            </NavLink>
          </li>
          <li>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" onClick={togglePeminjamanMenu}>
                <FcInvite /><span style={{fontSize: '14px'}}>Peminjaman</span>
              </div>
              <div className={`navbar-dropdown ${isPeminjamanOpen ? 'is-active' : ''}`}>
                <NavLink to={"/products"} className="navbar-item">
                  Permohonan Peminjaman
                </NavLink>
                <NavLink to={"/products/list"} className="navbar-item">
                  Daftar Peminjam
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" onClick={toggleJadwalMenu}>
                <FcViewDetails /><span style={{fontSize: '14px'}}>Jadwal Lab</span>
              </div>
              <div className={`navbar-dropdown ${isJadwalOpen ? 'is-active' : ''}`}>
              <CustomNavLink to="/jadwal/perlab/instrument" className="navbar-item" lab="instrument">
                Instrumentasi & Robotika
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/modeling" className="navbar-item" lab="modeling">
                Modeling
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/astrofisika" className="navbar-item" lab="astrofisika">
                Astrofisika
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/geofisika" className="navbar-item" lab="geofisika">
                Fisika Bumi
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/nuklir" className="navbar-item" lab="nuklir">
                Nuklir Medis
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/fismat" className="navbar-item" lab="fismat">
                Fisika Material
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/karmat" className="navbar-item" lab="karmat">
                Karakterisasi Fisika Material
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/workshop" className="navbar-item" lab="workshop">
                Workshop
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/basic" className="navbar-item" lab="basic">
                Fisika Dasar
              </CustomNavLink>
              <CustomNavLink to="/jadwal/perlab/advance" className="navbar-item" lab="advance">
                Fiska Lanjutan
              </CustomNavLink>
              </div>
            </div>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label mb-0">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <FcConferenceCall /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/jadwal"}>
                  <FcDataRecovery /> Jadwal
                </NavLink>
              </li>
              <li>
                <NavLink to={"/labs"}>
                  <FcBiomass /> Data Lab
                </NavLink>
              </li>
              <li>
                <NavLink to={"/list/news"}>
                  <FcKindle /> Buat Artikel
                </NavLink>
              </li>
            </ul>
          </div>
          
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar