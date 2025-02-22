"use client";
import React, { useContext, useState, useEffect } from "react";
import { FaGlobe, FaTrash } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import LanguageSelector from "./LanguageSelector";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  // context consumption here
  const context = useContext(AuthContext);
  if (!AuthContext) {
    throw new Error("Navbar must be used within a ContextProvider");
  }
  const { user, isLoggedIn } = context;
  // internationalization method here
  const { t } = useTranslation();
  //state here
  const [showNotifications, setShowNotifications] = useState(false);
  const hideSideMenu = () => {
    const sideMenu = document.querySelector(".side-menu") as HTMLElement;
    sideMenu.classList.toggle("hide");
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  // themes logic
  const [darkMode, setDarkMode] = useState(false);

  const changeBg = (
    lightColorLightness: string,
    whiteColorLightness: string,
    darkColorLightness: string
  ) => {
    const root = document.documentElement;

    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
  };
  const activateDarkMode = () => {
    setDarkMode(true);
    changeBg("10%", "18%", "95%");
    localStorage.setItem("theme", "dark");
  };
  const activateLightMode = () => {
    setDarkMode(false);
    changeBg("92%", "100%", "17%");
    localStorage.setItem("theme", "light");
  };
  useEffect(() => {
    const themeSelected = localStorage.getItem("theme");
    if (themeSelected == "dark") {
      activateDarkMode();
    } else {
      activateLightMode();
    }
  }, []);

  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <div
      className="nav shadow-stable d-flex py-4 py-md-4 py-lg-4 "
      style={{ height: "4.2rem" }}
    >
      {/* Hamburger Menu */}
      <div className="hamburger inline-block">
        <span
          className="d-md-none icon inline-block font-4 mx-3 mx-md-3 mx-lg-4 pointer"
          onClick={hideSideMenu}
        >
          <TfiMenu />
        </span>
        <span
          className="d-none d-md-inline-block icon inline-block font-4 mx-3  pointer"
          // onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <TfiMenu />
        </span>
        <span className="inline-block pointer">
          <span className=" bold-2 font-4">
            <span className="clr-purpple">LALA</span>
            <span className=" mx-2 inline-block">Homes</span>
          </span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="menu-item f-right">
        <Link
          className={
            isActive("/property")
              ? "d-none d-lg-inline-block font-2 mx-lg-3 mx-4 bold-1 capitalize style-none active"
              : "d-none d-lg-inline-block font-2 mx-lg-3 mx-4 bold-1 capitalize style-none"
          }
          href={"/property"}
        >
          <span>{t("property")}</span>
        </Link>
        <Link
          className={
            isActive("/register")
              ? "d-none d-lg-inline-block font-2 mx-lg-3 mx-4 bold-1 capitalize style-none active"
              : "d-none d-lg-inline-block font-2 mx-lg-3 mx-4 bold-1 capitalize style-none"
          }
          href={"/register"}
        >
          <span>{t("register")}</span>
        </Link>
        {/* Icons & Language Selector */}
        <div className="mx-2 mx-md-4 inline-block">
          <div className="inline-block mx-4">
            <span className="d-none d-lg-inline-block">
              <FaGlobe className="font-3 mx-2" />
              <LanguageSelector />
            </span>
          </div>

          {/* Notification Bell */}
          {/* {isCurrentUserLoggedIn ? ( */}
          <span className="inline-block mx-4 mt-3 relative">
            <BsBellFill
              className="mt-3 font-3-5 absolute bell-icon pointer"
              onClick={toggleNotifications}
            />
            {showNotifications ? (
              <div className="absolute card notifications-pane py-3 px-3 br-3 o-x-scroll o-hidden scroll-double-shrinked">
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
                <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <span className="f-right font-1">
                    <FaTrash />
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </span>
          <span>
            {darkMode ? (
              <span
                className="inline-block mt-3 l-height-4 hovered style-none my-4 block py-2 capitalize pointer block px-4"
                onClick={() => activateLightMode()}
              >
                <MdLightMode className="bold-1 inline-block" />
              </span>
            ) : (
              <li
                className="inline-block mt-3 l-height-4 hovered style-none my-4 block py-2 capitalize pointer block px-4"
                onClick={() => activateDarkMode()}
              >
                <MdDarkMode className="bold-1 inline-block" />
              </li>
            )}
          </span>
          {/* User Avatar */}
          {user && isLoggedIn ? (
            <span className="inline-block mx-3 py-0 my-0">
              <div className="d-flex py-0 my-0">
                <div className="inline-block mb-4">
                  <span
                    className="br-rnd b-1px-hue bg-green flex-centered-vertical flex-centered clr-white bold-2 font-3"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    {user.firstName ? user.firstName.charAt(0) : ""}
                  </span>
                </div>
              </div>
            </span>
          ) : (
            <span>
              <Link href={"/signup"}>
                <span className="font-3 bold-1 px-3 clr-purpple">Sign Up</span>
              </Link>
              <Link href={"/login"}>
                <button className="bg-purpple br-3 px-4 py-3 font-1 bold-1 clr-white pointer">
                  Login
                </button>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
