"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {
  style: string;
  logo?: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  blog: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li>
         
           
          <Link href="/">Home</Link>
         

        </li>

        <li>
          <Link href="/about">O Nas</Link>
        </li>
        <li className={dropdown.service ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("service")}
          >
            Oferta
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/services">Malowanie Proszkowe</Link>
            </li>
            <li>
              <Link href="/services/digital-marketing">Piaskowanie</Link>
            </li>
          </ul>
        </li>
        <li>

          <Link href="/projects">Galeria</Link>
        
        </li>
        {logo && (
          <li className="d-none d-lg-block">
            <Link href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Link>
          </li>
        )}

        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
