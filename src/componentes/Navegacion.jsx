import { Link, NavLink } from "react-router-dom";
import coral from "/public/img/coral.webp";
import instagram from "/public/img/instagram.webp";
import facebook from "/public/img/facebook.webp";
import x from "/public/img/x.png";
import linkedin from "/public/img/in.webp";
import youtube from "/public/img/youtube.png";
import { Btn } from "./Btn";
import { useState } from "react";

export const Navegacion = () => {
  let Links = [
    { name: "ABOUT", link: "/about" },
    { name: "RESTORATION", link: "/restoration" },
    { name: "EDUCATION", link: "/education" },
    { name: "SCIENCE", link: "/science" },
    { name: "EVENTS", link: "/events" },
    { name: "DONATE", link: "/donate" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mmr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            <NavLink to="/">
              <img src={coral} alt="" />
            </NavLink>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-xl text-black absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500
          ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 "
          } `}
          >
            {Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-2 my-7 text-black  ">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " : null)}
                  to={Link.link}
                >
                  {Link.name}{" "}
                </NavLink>
              </li>
            ))}
            {/* <Btn>Get Started</Btn> */}
          </ul>
        </div>
      </div>
      <nav className="redes bg-slate-50 mt-36 my-4">
        <NavLink to="/instagram">
          <img src={instagram} />
        </NavLink>
        <NavLink to="/facebook">
          <img src={facebook} />
        </NavLink>
        <NavLink to="/twitter">
          <img src={x} />
        </NavLink>
        <NavLink to="/linkedin">
          <img src={linkedin} />
        </NavLink>
        <NavLink to="/youtube">
          <img src={youtube} />
        </NavLink>
      </nav>

      {/* <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="/restoration"
        >
          Restoration
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="education"
        >
          Education
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="/science"
        >
          Science
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="/events"
        >
          Events
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : null)}
          to="/donate"
        >
          Donate
        </NavLink>
      </nav> */}
    </>
  );
};
