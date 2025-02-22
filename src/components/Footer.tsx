import Link from "next/link";
import React from "react";
import FooterForm from "./FooterForm";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="card-body clr-white block shadow-0-stable py-4 pt-lg-5">
      <div className="footer-quadriple-grid pb-lg-4">
        <div className="inline-block b-px-red mx-3 px-4 py-4">
          <span className="block pointer">
            <span className="go clr-purpple bold-2 font-4">LALA</span>
            <span className="safe bold-2 font-4">Homes</span>
          </span>
          <span className="block font-0 ">...Fast, Affordable & reliable</span>
        </div>

        <div className="d-none d-lg-inline-block b-px-red mx-3 px-3 pt-4">
          <Link href={"/settings"}>
            <span className="block font-1-5 clr-white py-3">Apartments</span>
            <span className="block font-1-5 clr-white py-3">Townhouses</span>
            <span className="block font-1-5 clr-white py-3">Villas</span>
            <span className="block font-1-5 clr-white py-3">Cattages</span>
            <span className="block font-1-5 clr-white py-3">
              Terms & Conditions
            </span>
            <span className="block font-1-5 clr-white py-3">
              Privacy Policy
            </span>
            <span className="block font-1-5 clr-white py-3">Cookie Policy</span>
          </Link>
        </div>
        <div className="block px-4 mx-3 px-md-1 mx-md-1">
          <span className="block font-3 py-4 bold-1">Call us:</span>
          <span className="block font-2 py-2">
            <span className="clr-purpple inline-block px-3">
              <FaPhone />
            </span>
            (+250) 788 408 140
          </span>
          <span className="block font-2 py-2">
            <span className="clr-purpple inline-block px-3">
              <FaPhone />
            </span>
            (+250) 784 057 461
          </span>
          <span className="block font-2 py-2">
            <span className="clr-purpple inline-block px-3">
              <FaEnvelope />
            </span>
            lalahomes@gmail.com
          </span>
          <span className="block font-2 py-4 ">
            <FaPhone className="shake font-3 mx-3 clr-purpple" />
            Hotline:<span className="font-4 px-3 clr-purpple">3030</span>
          </span>

          <div className="d-none d-lg-inline-block  b-px-red mx-0 mt-4 px-0 py-4">
            <FaFacebook className="mr-3 mx-md-2 mx-lg-3 pointer font-4" />
            <FaTwitter className="mx-3 mx-md-2 mx-lg-3 pointer font-4" />
            <FaLinkedin className="mx-3 mx-md-2 mx-lg-3 pointer font-4" />
            <FaYoutube className="mx-3 mx-md-2 mx-lg-3 pointer font-4 " />
            <FaInstagram className="mx-3 mx-md-2 mx-lg-3 pointer font-4" />
          </div>
        </div>
        <div className="inline-block b-px-red mx-3 px-3">
          <FooterForm />
          <div className="d-block d-md-none text-center  b-px-red mx-3 mt-4 px-3 py-4">
            <FaFacebook className="mx-3 pointer font-4" />
            <FaTwitter className="mx-3 pointer font-4" />
            <FaLinkedin className="mx-3 pointer font-4" />
            <FaYoutube className="mx-3 pointer font-4 " />
            <FaInstagram className="mx-3 pointer font-4" />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none  b-px-red mx-3 mt-0 px-3 py-0">
        <FaFacebook className="mx-3  mx-lg-3 pointer font-4" />
        <FaTwitter className="mx-3  mx-lg-3 pointer font-4" />
        <FaLinkedin className="mx-3  mx-lg-3 pointer font-4" />
        <FaYoutube className="mx-3  mx-lg-3 pointer font-4 " />
        <FaInstagram className="mx-3  mx-lg-3 pointer font-4" />
      </div>
      <span className="block pointer shadow-stable b-top-white font-0 bold py-3 mt-4 text-center ">
        &copy; Copyright LALA Homes. All Rights Reserved 2025
      </span>
    </div>
  );
};

export default Footer;
