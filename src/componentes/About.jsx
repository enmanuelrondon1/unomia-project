import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { UnomiaBlog } from "../blog";

export const About = () => {
  return (
    <>
      <h1>
        <a href="https://www.youtube.com/watch?v=HSBRa7R3seE">MoreInfo</a>
        </h1>
        <UnomiaBlog />
       <Footer/>
    </>
  );
};
