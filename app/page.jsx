"use client";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [highlighted, setHighlighted] = useState("All");

  return (
    <main>
      <div className="nav">
        <div className="nav-name">
          <p className="nav-txt">Rudr</p>
        </div>
        <div>
          <nav className="main-nav">
            <ul className="nav-ele">
              <li
                className={`${
                  highlighted === "All" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("All");
                }}
              >
                All
              </li>
              <li
                className={`${
                  highlighted === "About" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("About");
                }}
              >
                About
              </li>
              <li
                className={`${
                  highlighted === "Projects" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("Projects");
                }}
              >
                Projects
              </li>
              <li
                className={`${
                  highlighted === "Go-To" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("Go-To");
                }}
              >
                Go-To
              </li>
            </ul>
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

export default page;
