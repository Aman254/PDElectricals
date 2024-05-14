import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <section className="relative z-10 bg-violet-600 py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-black">
                  The page you are looking for it maybe deleted
                </p>
                <Link
                  to="/"
                  className="inline-block rounded-lg  px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-slate-950 hover:text-primary"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
