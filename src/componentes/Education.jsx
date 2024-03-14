import unomia2 from "/public/img/unomia2.jpeg";
import unomia3 from "/public/img/unomia3.avif";
import "../styles/education.css";
import { Button } from "flowbite-react";
import ReactPlayer from "react-player";
import { Footer } from "./Footer";
export const Education = () => {
  return (
    <>
      <h1 className="text-5xl py-2 grid-cols-1 font-bold text-center">
        Venezuela: El coral blando invasor Unomia afecta al Parque Nacional
        Mochima
      </h1>

      <div className="grid grid-cols-2 pt-4   ml-auto mr-auto w-3/4">
        <div className="grid gap-2 p-2 m-auto  ">
          <ReactPlayer
            className="h-auto max-w-full rounded-lg"
            url="/img/video2.mp4"
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
          <figcaption className=" text-black m-auto    ">
            <p className="font-serif text-justify    p-4    bg-slate-200 ">
              La noticia de que un coral invasor llamado Unomia stolonifera
              había invadido el Parque Nacional Mochima y amenazaba con
              transformarlo en un pantano nauseabundo, causó un gran revuelo
              nacional; no así la noticia donde se narra cómo, luego de un
              acuciosa investigación y una acción en campo, finalmente se
              demostró que se le puede dar muerte. Las noticias malas convocan
              más atención que las buenas.
            </p>
          </figcaption>
        </div>

        <div className="grid gap-2 p-2 m-auto  ">
          <ReactPlayer
            className="h-auto max-w-full rounded-lg"
            url="/img/video4.mp4"
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
          <figcaption className=" text-black m-auto   ">
            <p className="font-serif text-justify  p-4     bg-slate-200 ">
              Las pruebas realizadas en la Isla Arapo del estado Sucre a
              principios de octubre mostraron que el coral invasor muere,
              simplemente, quitándole el sol. Hay quien manifiesta dudas sobre
              la capacidad para acabar con la invasión de manera definitiva,
              dada la poca extensión que con la técnica aplicada logró limpiarse
              en cinco días: el experimento abarcó 70 m2, con 70 m2 de plástico,
              para enfrentar una invasión de posiblemente más de cien
              kilómetros.
            </p>
          </figcaption>
        </div>

        <div className="grid gap-2 p-4 ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img/unomia-virus.jpg"
            muted
          />
          <figcaption className=" text-black   ">
            <p className="font-serif text-justify p-4          bg-slate-200 ">
              Las dudas son legítimas. Sin embargo, es bueno acotar que
              controlar la invasión no es simplemente un asunto de aritmética,
              ni de velocidad. La solución probada permite visualizar el
              problema en su justa dimensión. Las interrogantes son ahora: cuál
              es el estado químico y biológico de los espacios liberados, cómo
              impedir que Unomia stolonifera recolonice o reinvada las áreas
              despejadas, cuál es la ruta a seguir para controlar de manera
              definitiva la invasión de este peligroso coral.
            </p>
          </figcaption>
        </div>

        <div className="grid gap-2 p-4  ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img/unomia-virus2.jpg"
          />
          <figcaption className=" text-black    ">
            <p className="font-serif text-justify p-4       bg-slate-200 ">
              “Todos los corales tienen asociados a ellos microalgas, las cuales
              les permiten obtener, a través de la fotosíntesis, productos
              alimenticios. A pesar de que se alimentan de forma natural con los
              tentáculos y lo que está en el ambiente, también usan a las algas
              como medio de alimento y forma de maximizar su alimentación. Al
              tapar el coral evitamos la fotosíntesis del alga y esta muere. Al
              no tener el alga viva, la luz del alga se desprende del coral y
              queda sólo el animal. La simbiosis que había desaparece del alga y
              del coral y esto hace que el coral muera.
            </p>
          </figcaption>
        </div>

        <div className="grid gap-2 p-8 ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img/imagen2.jpg"
          />
          <figcaption className=" text-black   ">
            <p className="font-serif text-justify   p-4     bg-slate-200 ">
              Johanna Rondón, bióloga marina de la Universidad de Oriente (UDO),
              especialista en corales y parte del equipo de investigación,
              explica científicamente cómo ocurre la muerte de Unomia
              stolonifera mediante el método aplicado en Isla Arapo.
            </p>
          </figcaption>
        </div>

     
      </div>

      <div className="items-center grid grid-cols-2 justify-center "></div>
      <Footer />
    </>
  );
};
