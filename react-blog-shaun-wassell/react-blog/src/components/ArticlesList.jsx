import React from 'react'

import { Link } from 'react-router-dom'

const ArticlesList = ({ articles }) => {
  return (
    <React.Fragment>
      <h1>ArticlesListPage</h1>
      { articles.map(article => (
        <Link key={article.name} to={`/articles/${article.name}`} className='article-list-item'>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </React.Fragment>
  )
}

export default ArticlesList;