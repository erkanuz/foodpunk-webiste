import React from 'react'

import Navbar from './navbar';
import Home from './home'
import Recipes from './Recipes';
import News from './News';
import Comments from './Comments';
import Contacts from './Contacts';
import Footer from './Footer';

const Pages = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Recipes/>
    <News/>
    <Comments/>
    <Contacts/>
    <Footer/>
    </div>
  )
}

export default Pages