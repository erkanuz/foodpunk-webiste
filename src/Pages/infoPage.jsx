import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import '../Styles/infopage.css'
import Navbar from './navbar';
import Footer from './Footer';

import {ThumbsUp, Users, Clock, CookingPot} from 'phosphor-react'

const InfoPage = () => {
  let params = useParams();
  const[details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    //eslint-disable-next-line
  }, [params.name]);

  return (
    <section className='InfoPage'>
    <Navbar/>
    <div className='infopage_container container'>
      <h2 className='food_title'>{details.title}</h2>

      <div className='firts_grid grid'>
        <div className='info_image'>
          <img src={details.image} alt="" className='info_img'/>
        </div>
        <div>
          <p className='duty'><ThumbsUp size={24} weight="fill"/> {details.aggregateLikes}</p>
          <p className='duty'> SERVES : {details.servings} <Users size={24} weight="fill" /></p>
          <p className='duty'>COOKS IN : {details.readyInMinutes} min <Clock size={24} weight="fill" /></p>
          <div className='dish_type'>
            <p className='duty'>DISH TYPE : </p>
            <p dangerouslySetInnerHTML={{__html: details.dishTypes}} className='dish'></p>
            <CookingPot size={24} weight="fill" />
          </div>
          <div>
            <p dangerouslySetInnerHTML={{__html: details.summary}} className='info_description'></p>
          </div>
        </div>
      </div>

      <div className="second_grid grid">
        <div>
          <h3 className='subinfo_title ingre'>Ingredients</h3>
          <ul className='ing_dots'>
              {details.extendedIngredients?.map((ingredien, idx) => (
                <li key={idx}>{ingredien.original}</li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className='subinfo_title'>Method</h3>
          <p dangerouslySetInnerHTML={{__html: details.instructions}} className='met_des'></p>
        </div>
      </div>

    </div>
    <Footer/>
  </section>
  )
}

export default InfoPage