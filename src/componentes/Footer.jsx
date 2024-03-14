import { useRef, useState } from "react";
import "../styles/footer.css";
import facebook from "/img/facebook.webp";
import { About } from "./About";
import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <>
      

      <div className="">
        <link
          href="//coralgardeners.org/cdn/shop/t/69/assets/mm-footer.css?v=132630412827764046461707901008"
          rel="stylesheet"
        />

        <div className="grid grid-cols-4 my-44">
          <div className="">
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto m-6"
              src="/img/pesca.webp"
            />
          </div>

          <div className="grid grid-cols-2 justify-center items-start col-span-2">
            <div>
            <h4 className="py-4 text-4xl">Read More</h4>
            <ul className="mm-footer-menu-list">
              <li>
                <a
                  href="https://cdn.shopify.com/s/files/1/0505/4663/9015/files/CG_ImpactReport_22_FR.pdf?v=1678502047"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Impact Report (EN)
                </a>
              </li>
              <li>
                <a
                  href="https://cdn.shopify.com/s/files/1/0505/4663/9015/files/CG_ImpactReport_22_EN.pdf?v=1678370758"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Rapport d'Impact (FR)
                </a>
              </li>
              <li>
                <a
                  href="/pages/careers"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/pages/contact-us"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="https://coralgardeners.org/pages/partnership"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="/blogs/news"
                  className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                >
                  Blog
                </a>
              </li>
            </ul>
            </div>

            <div className="">
              <h4 className="py-4 text-4xl">Policies</h4>
              <ul className="mm-footer-menu-list">
                <li>
                  <a
                    href="/pages/about"
                    className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                  >
                    Terms of Sale
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/terms-of-service"
                    className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/privacy-policy"
                    className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/refund-policy"
                    className="items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-teal-100"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-items-center   ">
            <div className=" ">
              <h4 className="text-3xl">Join the movement</h4>
              <p className="text-justify mt-6">
                Sign up Follow our mission and get updates straight from the
                field, insights on how to protect the ocean and all things
                corals.
              </p>

              <div className="mt-6  ">
                <div className="  grid m-auto  text-black">
                  <form className="max-w-md mx-auto ">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </form>

                  <button className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative w-full px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Send
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <ul className="mt-6 bg-slate-50 bg-transparent">
              <li>
                <a href="./facebook">
                  <img
                    className="w-24 h-24 md:w-6 md:h-auto md:rounded-none rounded-full mx-auto"
                    src={facebook}
                  />
                </a>
              </li>
              <li className="w-24 h-24 md:w-6 md:h-auto md:rounded-none rounded-full mx-auto">
                <a href="./youtube">
                  <img src="/img/youtube.png" />
                </a>
              </li>
              <li className="w-24 h-24 md:w-6 md:h-auto md:rounded-none rounded-full mx-auto">
                <a href="./instagram">
                  <img src="/img/instagram.webp" />
                </a>
              </li>
              <li className="w-24 h-24 md:w-6 md:h-auto md:rounded-none rounded-full mx-auto">
                <a href="https://www.instagram.com/coralgardeners/">
                  <img src="/img/in.webp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
