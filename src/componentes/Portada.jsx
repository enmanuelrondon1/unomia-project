import { Link } from "react-router-dom";
import unomia from "/public/img/unomia.jpg";
import ReactPlayer from "react-player";
import video from "/public/img/video-coral.mp4";
import video2 from "/public/img/video2.mp4";
import "../styles/portada.css";
import video3 from "/public/img/video2.mp4";
import video4 from "/public/img/video4.mp4";
import { Footer } from "./Footer";
import { About } from "./About";
import { useState } from "react";

export const Portada = () => {
  const [send, setSend] = useState("");

  const valor = (e) => {
    setSend(e.target.value);
  };

  const envia = () => {
    if (send.includes("@")) {
      alert("es correcto debe incluir el @!");
    } else {
      alert("Correo electronico incorrecto debes incluir el @.");
    }
  };
  return (
    <>
      <div className="body">
        <h2 className="m-4  text-2xl text-center font-extrabold dark:text-white mt-6 py-4 ">
          WELCOME TO THE BIGGEST CORAL REEF RESTORATION EFFORT ON THE PLANET
        </h2>
        <div>
          <div className="portada1 contenido">
            <div className="portada-video">
              <video
                src="https://cdn.shopify.com/videos/c/o/v/a6c2f1e3d982450fb8a3407b8eaf7c6b.mp4"
                autoPlay
                muted
                loop
                playsInline
                width="100%"
                height="100%"
              />
            </div>

            <div className="portada-content">
              <h2 className="m-4  text-2xl text-center font-extrabold dark:text-white mt-6 py-4">
                RESTORING THE OCEAN, ONE CORAL AT A TIME Still wondering how to
                help fix our blue planet? Take action to plant corals with us.
              </h2>

              <a
                href="#"
                className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>

          <div>
            <p className="description mt-6">
              El coral blando Unomia stolonifera (Octocorallia: Xeniidae) es
              originario de las islas indonesias de Pulau Ambon (Ambon) y
              Sulawesi (Célebes), ubicadas en el Océano Pacífico Occidental
              (Benayahu y col., 2021); a diferencia de sus parientes los corales
              duros o pétreos los cuales se caracterizan por presentar seis
              tentáculos en sus pólipos (clase ANTHOZOA, subclase Hexacorallia,
              orden Scleractinia), éste es un organismo colonial de cuerpo
              blando o gelatinoso con ocho tentáculos en sus pólipos de allí el
              nombre de octocorales (clase ANTHOZOA, subclase Octocorallia ,
              orden Alcyonacea), que no poseen un esqueleto calcáreo y está
              constituido en su mayor parte por agua.
            </p>

            <div className="portada1 contenido mt-6">
              <div className="portada-video">
                <video src={video4} autoPlay loop muted />
              </div>

              <div className="portada-content mt-6">
                <h2 className="m-4  text-2xl text-center font-extrabold dark:text-white mt-6 py-4">
                  We are partnering with the iconic surf brand, Billabong, to
                  address the increasing threat to the ocean’s rainforests with
                  a collection that helps raise awareness and restore the ocean.
                </h2>
                <a
                  href="#"
                  className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <p className="description mt-6">
            Esta especie posee también dos formas de reproducción: una de tipo
            sexual (con producción de gametos sexuales y deriva de larvas) y una
            de tipo asexual (por la fragmentación de propágulos capaces de
            generar nuevas colonias rápidamente); adicional a que poseen
            toxinas, que de manera química, les ayudan a competir con otras
            especies por el espacio a colonizar.
          </p>

          <div className="portada1 contenido mt-6">
            <div className="portada-video">
              <ReactPlayer
                url='img/video-coral.mp4'
                playing
                loop
                muted
                width="100%"
                height="100%"
              />
            </div>

            <div className="portada-content">
              <h2 className="m-4  text-2xl text-center font-extrabold dark:text-white mt-6 py-4">
                JOIN US IN PLANTING 1 MILLION CLIMATE-RESILIENT CORALS BY 2025
                TO RESTORE OUR DYING REEFS.
              </h2>
              <a
                href="#"
                className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
          <p className="description mt-6">
            El octocoral del Indo-Pacı́fico Unomia stolonifera (Alcyonacea,
            Xeniidae), ha sido catalogada como una especie exótica invasora en
            las costas venezolanas. De acuerdo con las investigaciones
            realizadas por Ruiz-Allais et al. (2021), la especie invasora, ha
            sido una de las principales afectaciones que han estado
            contribuyendo, en gran medida, al deterioro de los ecosistemas
            marinos y, en particular, los arrecifes de coral, dispersándose
            rápidamente a lo largo de las comunidades de arrecifes poco
            profundos y creciendo agresivamente sobre los distintos tipos de
            sustratos marinos costeros del país.
          </p>

          <div className="portada1 contenido mt-6">
            <div className="portada-video">
              <ReactPlayer
                url="/img/video4.mp4"
                playing
                loop
                muted
                width="100%"
                height="100%"
              />
            </div>

            <div className="portada-content mt-4 ">
              <h2 className="m-4 text-2xl text-center font-extrabold dark:text-white mt-6 py-4">
                CORAL REEFS ARE ONE OF THE MOST DIVERSE AND VALUABLE ECOSYSTEMS
                ON EARTH, AND WE’VE ALREADY LOST HALF OF THEM.
              </h2>

              <a
                href="#"
                className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-5xl text-center font-extrabold dark:text-white mt-6 py-4">
          TAKE ACTION FOR THE REEF TODAY
        </h1>

        <div className="grid grid-cols-3 gap-3 p-9 m-4 px-5 py-10  ">
          <figure className="grid bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto m-6"
              src="/img/imagen7.jpg"
              alt=""
              width="384"
              height="512"
            />

            <div className="pt-6 md:p-8 text-center md:text-left items-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-center text-sky-500 dark:text-sky-400">
                  ADOPT
                </div>
                <div className="text-slate-700 dark:text-slate-500"></div>
              </figcaption>
              <blockquote className="text-center">
                <p className="text-justify font-medium text-black dark:text-white">
                  Make a statement by wearing our merch to represent the
                  movement and directly support our work, with 100% of the
                  proceeds reinvested into our mission.
                </p>
                <a
                  href="adoptar"
                  className=" items-center transition-colors hover:bg-sky-900 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-blue-500"
                >
                  ADOPT A CORAL
                </a>
              </blockquote>
            </div>
          </figure>

          <figure className="grid bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto m-6"
              src="/img/imagen8.jpg"
              alt=""
              width="384"
              height="512"
            />

            <div className="pt-6 md:p-8 text-center md:text-left items-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-center text-sky-500 dark:text-sky-400">
                  WEAR
                </div>
                <div className="text-slate-700 dark:text-slate-500"></div>
              </figcaption>
              <blockquote className="text-center">
                <p className="text-justify font-medium text-black dark:text-white">
                  Make a statement by wearing our merch to represent the
                  movement and directly support our work, with 100% of the
                  proceeds reinvested into our mission.
                </p>
                <a
                  href="adoptar"
                  className=" items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-blue-500"
                >
                  SHOP SUSTAINAIBLY
                </a>
              </blockquote>
            </div>
          </figure>

          <figure className="grid bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto m-6"
              src="/img/imagen6.jpg"
              alt=""
              width="384"
              height="512"
            />

            <div className="pt-6 md:p-8 text-center md:text-left items-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-center text-sky-500 dark:text-sky-400">
                  DONATE
                </div>
                <div className="text-slate-700 dark:text-slate-500"></div>
              </figcaption>
              <blockquote className="text-center">
                <p className="text-justify font-medium text-black dark:text-white">
                  Donate to help fund all of our work from coral restoration
                  activities to science projects, technology developments and
                  advocacy programs.
                </p>
                <a
                  href="adoptar"
                  className=" items-center transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200 text-blue-500"
                >
                  MAKE A DONATION
                </a>
              </blockquote>
            </div>
          </figure>
        </div>

        <main className="py-4 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-100 md:text-2xl dark:sm:text-white">
                EXPLORE OUR IMPACT IN REAL TIME
              </h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                Entire house
              </p>
            </div>

            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img
                src="/img/mapa-unomia.png"
                alt=""
                className="w-full h-60 object-cover rounded-lg sm:h-53 sm:col-span-2 lg:col-span-full"
                loading="lazy"
              />
              <img
                src="/img/mapa.webp"
                alt=""
                className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              />
              <img
                src="/img/mapa.webp"
                alt=""
                className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              />
            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-indigo-600 flex items-center dark:text-indigo-400"></dd>
              <dd className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-slate-400 dark:text-slate-500"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Collingwood, Ontario
              </dd>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <button
                type="button"
                className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                EXPLORE OUR DASHBOARD
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              Dive into our work and explore our new ReefOS geospatial dashboard
              and its coordinating technologies developed by our CG Labs.
            </p>
          </div>
        </main>
        <section className=" grid grid-cols-2 justify-items-center py-28 w-4/5  mx-auto ">
        <div className="text-center items-center text-4xl ">
          <h3 className="h-10">JOIN THE MOVEMENT</h3>
          <p className=" text-justify text-slate-400">
            Things are moving at full speed at Coral Gardeners, so get ready
            tofollow along and receive updates straight from the field.
          </p>
        </div>
        <div className="grid m-auto p-7  ">
          <input
            className="footer-button text-black "
            type="text"
            placeholder="E-mail"
            value={send}
            onChange={valor}
          />
          <button type="submit" onClick={envia} className="footer-button mt-3">
            Send
          </button>
        </div>
      </section>

      <span className="">
        <h2 className="text-center text-4xl py-10">
          Coral Gardeners has a 501(c)(3) counterpart in the United States.
        </h2>
      </span>

        <Footer />
      </div>
    </>
  );
};
