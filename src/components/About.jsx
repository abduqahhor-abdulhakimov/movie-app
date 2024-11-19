import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import anonym from '../image/anonym.jpg'

function About({ obj, lang }) {
  let [cast, setCast] = useState('')
  let [videos, setVideos] = useState('')

  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/movie/${obj.id}/credits?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`

    )
      .then((res) => res.json())
      .then((data) => setCast(data));


      fetch(
        `https://api.themoviedb.org/3/movie/${obj.id}/videos?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`
      )
        .then((res) => res.json())
        .then((data) => setVideos(data));
  
  }, [lang])

  console.log(videos)

  const imageUrl = "https://image.tmdb.org/t/p/w300"

  return (
    <div className='about'>

      <div className="container">
        <div className="about__inner">
        <div className="about-img">
        <img src={imageUrl + obj.poster_path} alt="" />
      </div>
      <div className="about__right">
        <div className="about-tex">
          <span>Название:</span>
          <div className="tex1">{obj.title}</div>
          <span>Обзор:</span>
          <div className="tex2">{obj.overview}</div>
          <span>Дата релиза:</span>
          <div className="tex3">{obj.release_date}</div>
          <span>Бюджет:</span>
          <div className="tex4">$ 78 000 000</div>
          <span>Сборы:</span>
          <div className="tex5">$ 232 785 520</div>
        </div>

        <div className="about__main">
          {
            cast && cast.cast.map(item => {
              console.log(cast)
              return <div className='about__item'>
                {
                item.profile_path ? < img className='imag' src={imageUrl + item.profile_path} alt="" /> : <img className='imag' src={anonym}/>
                }
                <div className="name">{item.name}</div>
                <div className="obrz">{item.character}</div>
              </div>
            })
          }
        </div>
        {/* <div className="about__trailer">
        { videos ?  'trailer yoq' : <iframe width={800} height={450}
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />}

        </div> */}
      </div>
        </div>
      </div>
    </div>
  )

}

export default About
