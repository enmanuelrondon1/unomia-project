import video from "/public/img/video-coral.mp4";
import ReactPlayer from "react-player";
import "../styles/restoration.css";
import { Footer } from "./Footer";
import { MapView } from "../mapa/MapView";
export const Restoration = () => {
  return (
    <>
      <MapView  />
      <Footer/>
    </>
  );
};
