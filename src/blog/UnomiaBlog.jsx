import { useEffect, useState } from "react"
import data from "./data/data"
import './blog.css'
import { BlogList } from "./BlogList"
import { Article } from "./Article"

export const UnomiaBlog =() => {

  const allCategories = ['All', ...new Set(data.map(article => article.category))]
  console.log(allCategories)


  const [categories, setCategories] = useState(allCategories)
  const [articles, setArticles] = useState(data)

  const filterCategory = (category) => {
    if (category === 'All') {
      setArticles(data)
      return
    }

    const filterData = data.filter(article => article.category === category)
    setArticles(filterData)
  }




  return (
    <>
    <div className="title ">
      <h1>Filter <span>Blog</span></h1>
    </div>
      <img className="w-3/4 m-auto" src="./img/imagen6.jpg" />
      

    <BlogList categories={categories} filterCategory={filterCategory}  />
    <Article articles={articles} />
    
    </>
  )
}