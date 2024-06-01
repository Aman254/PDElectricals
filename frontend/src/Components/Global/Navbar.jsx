import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";

export default function Navbar() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 md:text-3xl font-bold text-xl font-poppins text-slate-950">
              <Link to="/">PdElectricals</Link>
            </span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <Link to="/" className="mr-5 hover:text-gray-900 ">
              Home
            </Link>
            <Link to="/contactus" className="mr-5 hover:text-gray-900 ">
              Contact
            </Link>
            {/* {login ? (
              <button>
                <Link to="/account">
                  <Avatar />
                </Link>
              </button>
            ) : (
              <button
                className="px-6 py-3 text-xs font-bold text-center text-slate-950 uppercase align-middle transition-all rounded-lg select-none 
            hover:bg-violet-900/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border"
                type="button"
              >
                <Link to="/login">Sign In</Link>
              </button>
            )} */}
          </nav>
        </div>
      </header>
    </div>
  );
}
