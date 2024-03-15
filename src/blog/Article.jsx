import { NavLink } from "react-router-dom";

export const Article = ({ articles }) => {
  let Links = [
    { name: "ABOUT", link: "/about" },
    { name: "RESTORATION", link: "/restoration" },
    { name: "EDUCATION", link: "/education" },
    { name: "SCIENCE", link: "/science" },
    { name: "EVENTS", link: "/events" },
    { name: "DONATE", link: "/donate" },
  ];

  return (
    <>
      <div className="article-list ">
        {articles.map((article) => (
          <div key={article.image} className="article-container ">
            <div className="img-container">
              <a href={article.link}>
                <img src={article.image} />
              </a>

              <div className="article-body">
                <h2> {article.title} </h2>
                <p> {article.description} </p>
                <div className="article-footer">
                  <span>{article.date} -</span>
                  <span> {article.ReadingTime} </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
