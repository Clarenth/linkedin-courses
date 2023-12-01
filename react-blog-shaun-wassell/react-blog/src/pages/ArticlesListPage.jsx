import React from 'react'

import ArticlesList from '../components/ArticlesList'

import articles from './article-content'


const ArticlesListPage = () => {
  return (
    <React.Fragment>
      <ArticlesList articles={articles} />
    </React.Fragment>
  )
}

export default ArticlesListPage;