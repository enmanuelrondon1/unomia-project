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
      <hr />
      <div className="bg-white dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-white dark:border-white ">
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
            <span className="text-3xl text-indigo-600 mmr-1 pt-2 mr-4">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            <NavLink to="/">
              <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://firebasestorage.googleapis.com/v0/b/unomia-stolonifera.appspot.com/o/Navegacion%2F1.png?alt=media&token=666a5075-7bf6-4d91-9494-c2e203ae2709" alt="" />
            </NavLink>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-xl text-black absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-slate-500  text-opacity-25 md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0  transition-all duration-500 ease-in
             ${open ? "top-18 opacity-100" : "top-[-490px] md:opacity-100 "} `}
          >
            {Links.map((Link) => (
              <li
                key={Link.name}
                className="text-white bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 me-2 mb-3 dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  "
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : null
                  }
                  to={Link.link}
                >
                  {Link.name}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="redes mt-36 bg-slate-50  my-4">
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
