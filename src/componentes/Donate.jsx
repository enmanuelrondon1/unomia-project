import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/donate.css";
import { Footer } from "./Footer";



export const Donate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wlucfrb", "template_6r9hxmd", form.current, {
        publicKey: "UhOSBXg9SavmiiAzb",
      })
      .then(
        () => {
          // alert("message enviado");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <form
        className="max-w-sm mx-auto my-14   py-6 "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-white dark:text-blue-500"
          >
            Your name
          </label>
          <input
            type="text"
            name="user_name"
            id="username-success"
            className="bg-green-50 border border-green-500 text-black dark:text-green-400 placeholder-slate-500 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Example: Bonnie Green"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username available!
          </p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-white dark:text-green-500"
          >
            Your Email
          </label>
          <input
            type="text"
            name="user_email"
            id="username-success"
            className="bg-green-50 border border-green-500 text-black dark:text-green-400 placeholder-slate-500 dark:placeholder-green-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Example: enma@gmail.com"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username available!
          </p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-white dark:text-green-500"
          >
            Your Message
          </label>
          <input
            type="text"
            name="message"
            id="username-success"
            className="bg-green-50 border border-green-500 text-black dark:text-green-400 placeholder-slate-500 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Example: This is my website"
          />

          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username available!
          </p>
        </div>
        <span>
          <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <input type="submit" value="Send" />
            </span>
          </button>
        </span>
      </form>
      <Footer/>
    </>
  );
};
