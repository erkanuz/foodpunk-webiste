import React from 'react'
import { useEffect, useState } from 'react'
import '../Styles/recipes.css'

import {Link} from 'react-router-dom'

function Recipes() {

  const[popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <section className="recipes section">
      <h2 className='recipes_title'>Recipes</h2>
      <h3 className='recipes_subtitle'>TRENDING NOW</h3>
      <div className="recipes_filter">
          <button className="none">FILTER BY :</button>
          <button className="filter active">POPULAR</button>
          <button className="filter active">CHIKEN</button>
          <button className="filter active">FRUIT</button>
          <button className="filter active">PASTA</button>
          <button className="filter active">VEGETABLES</button>
        </div>
      <div className="recipes_contaier container grid">
        {popular.map((recipes) => {
          return(
            <div className='recipes_card' key={recipes.id}>
              <Link to={'/infoPage/' + recipes.id}>
              <p className="recipes_names">{recipes.title}</p>
              <div className="change_back">
                <img src={recipes.image} alt={recipes.title} className="recipes_image"/>
                <div className="mask"></div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Recipes