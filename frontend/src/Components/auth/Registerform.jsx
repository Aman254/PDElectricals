import React from "react";
import { Link } from "react-router-dom";
import AuthInput from "./Authinput.jsx";

export default function Registerform() {
  return (
    <div>
      {" "}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* container */}
        <div className="mx-auto max-w-lg">
          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-slate-950 sm:text-3xl">
            Get started today
          </h1>
          {/* SubHeading */}
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            We're thrilled to have you back. Sign in to your account to access
            exclusive services.
          </p>
          {/* FORM */}
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign Up to your account
            </p>
            <AuthInput name="name" type="text" placeholder="Full Name" />
            {/* <AuthInput name="number" type="number" placeholder="Mobile" /> */}
            <AuthInput name="email" type="text" placeholder="Email Address" />
            <AuthInput name="password" type="password" placeholder="Password" />

            <button
              type="submit"
              className="block w-full rounded-lg bg-violet-600 hover:bg-violet-400 transition-all px-5 py-3 text-sm font-medium text-white"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already Have an Account?{" "}
              <Link className="underline" to="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
