"use client";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const handleIndicator = (e) => {
    console.log(e.target.offsetLeft, e.target.offsetWidth);
    setIndicatorStyle({
      left: e.target.offsetLeft,
      width: e.target.offsetWidth,
      height: e.target.offsetHeight,
    });
  };

  return (
    <main>
      <div className="nav">
        <div className="nav-name">
          <p className="nav-txt">Rudr</p>
        </div>
        <div>
          <nav className="main-nav">
            <ul className="nav-ele">
              <li className="elements" onClick={(e) => handleIndicator(e)}>
                All
              </li>
              <li className="elements" onClick={(e) => handleIndicator(e)}>
                About
              </li>
              <li className="elements" onClick={(e) => handleIndicator(e)}>
                Projects
              </li>
              <li className="elements" onClick={(e) => handleIndicator(e)}>
                Picks
              </li>
            </ul>
            <div
              className="indicator"
              style={{
                left: indicatorStyle.left + "px",
                width: indicatorStyle.width + "px",
                height: indicatorStyle.height + "px",
              }}
            ></div>
          </nav>
        </div>
        <div>
          <Link href="mailto:rudr26@proton.me" className="mail-link">
            <p className="mail-btn">Contact</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
