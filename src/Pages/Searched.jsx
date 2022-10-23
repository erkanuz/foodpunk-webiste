import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import Navbar from './navbar';
import Footer from './Footer';

import '../Styles/search.css'

const Searched = () => {
  const [searchedRe, setSearchedRe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`);
    const recipes = await data.json();
    setSearchedRe(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className='searched'>
    <Navbar/>
    <h2 className='Searched_name'>Searched item</h2>
    <div className="recipes_contaier container grid">
      {searchedRe.map((item) => {
        return(
          <div className='recipes_cards' key={item.id}>
          <Link to={'/infoPage/' + item.id}>
          <p className="r_name">{item.title}</p>
            <div className="change_back">
                <img src={item.image} alt={item.title} className="recipes_image"/>
                <div className="masks"></div>
              </div>
          </Link>
          </div>
        );
      })}
    </div>
    <Footer/>
    </div>
  )
}

export default Searched