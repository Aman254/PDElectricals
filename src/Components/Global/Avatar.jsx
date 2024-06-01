import React from "react";

export default function Avatar() {
  return (
    <div>
      <div className="avatar rounded-full">
        <div className="max-w-6 md:mt-0 mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src="https://avatar.iran.liara.run/public/46"
            className="cursor-pointer rounded-full"
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
}
