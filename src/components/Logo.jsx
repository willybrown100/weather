import React from 'react'

export default function Logo() {
  return (
    <div className="rounded-full gap-x-3 flex items-center justify-center ">
      <img
        src="/weatherLogo.jpg"
        alt="logo"
        className="rounded-full w-[2rem]  h-[2rem]"
      />
      <h4 className="mb-0 font-semibold capitalize logo">my weather</h4>
    </div>
  );
}
