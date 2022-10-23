import React from 'react'
import '../Styles/news.css'

import {PlayCircle} from 'phosphor-react'

const News = () => {
  return (
    <section className="news section">
        <h2 className='nt'>Top features & videos</h2>
        <h3 className='nts'>see our latest topics and news from the world of cooking</h3>
      <div className="news_container container grid">
        <div className="news_card">
          <img src="https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='newsimg' />
          <span className="mb">
            <PlayCircle size={26} />
          </span>
        </div>

        <div className="news_card">
          <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='newsimg'/>
          <span className="mb">
            <PlayCircle size={26} />
          </span>
        </div>

        <div className="news_card">
          <img src="https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='newsimg'/>
          <span className="mb">
            <PlayCircle size={26} />
          </span>
        </div>

        <div className="news_card">
          <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='newsimg'/>
          <span className="mb">
            <PlayCircle size={26} />
          </span>
        </div>
      </div>
    </section>
  )
}

export default News