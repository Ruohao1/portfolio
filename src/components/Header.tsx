import React, { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    var prevScrollPos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (header) {
        if (prevScrollPos > currentScrollPos) {
          header.style.top = "0";
        } else {
          header.style.top = "-100px";
        }
      }
      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <header className="flex w-full justify-between items-center h-24 fixed top-0 transition-all duration-300">
      <div className="logo px-10">
        <a href="/">Logo</a>
      </div>
      <div className="navbar ">
        <ul className="flex">
          <li className="px-5">
            <a href="/#about">About</a>
          </li>
          <li className="px-5">
            <a href="/#experience">Experience</a>
          </li>
          <li className="px-5">
            <a href="/#work">Work</a>
          </li>
          <li className="px-5">
            <a href="/#education">Education</a>
          </li>
          <li className="px-5">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
