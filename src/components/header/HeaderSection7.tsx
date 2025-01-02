"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavSection from "../navigation/NavSection";

const HeaderSection7 = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsHeaderFixed(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <header
      className={`rv-1-header rv-inner-header to-be-fixed ${
        isHeaderFixed ? "fixed" : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-4 col-xxs-6">
            <div className="rv-1-logo">
              <Link href="/">
                <img
                  src="assets/img/rv-18-logo.png"
                  alt="logo"
                  className="logo"
                />
              </Link>
            </div>
          </div>

          <div className="col-md-6 order-2 order-lg-1">
            <div
              className={`rv-1-header-nav__sidebar ${
                isSidebarOpen ? "active" : ""
              }`}
              ref={sidebarRef}
            >
              <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                <Link href="/" className="logo-container">
                  <img src="assets/img/rv-18-logo.png" alt="logo" />
                </Link>
                <button
                  className="rv-3-def-btn rv-1-header-mobile-menu-btn rv-8-mobile-menu-btn sidebar-close-btn rounded-0"
                  onClick={closeSidebar}
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </div>

              <NavSection style="rv-1-header__nav rv-18-header__nav" />
            </div>
          </div>

          <div className="col-lg-4 col-8 col-xxs-6 text-end order-1 order-lg-2">
            <div className="d-flex justify-content-end">
              <div className="rv-inner-header-right-btns rv-15-header-right-btns rv-18-header-right-btns">
                <Link
                  href="tel:1237775643"
                  className="d-none d-md-inline-block"
                >
                  <i className="fa-solid fa-phone"></i>(123) 777 - 5643
                </Link>
                <Link href="contact.html" className="d-sm-inline-block d-none">
                  Get a Quote
                </Link>
              </div>
              <button
                className="rv-1-header-mobile-menu-btn rv-3-def-btn rv-8-mobile-menu-btn rounded-0 d-lg-none d-inline-block"
                id="rv-1-header-mobile-menu-btn"
                onClick={openSidebar}
              >
                <i className="fa-regular fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection7;
