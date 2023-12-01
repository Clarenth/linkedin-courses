import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// Pages
import { 
  AboutPage, 
  ArticlePage, 
  ArticlesListPage, 
  HomePage, 
  LoginPage,
  NotFoundPage,
  SignupPage, 
} from './pages/index'
import NavBar from './NavBar'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/articles' element={ <ArticlesListPage /> } />
            <Route path='/articles/:articleId' element={ < ArticlePage/> } />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
