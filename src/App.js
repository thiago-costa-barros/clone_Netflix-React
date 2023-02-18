import React, { useState } from "react";
import "./App.css"
import tmdb from "./tmdb";
import { useEffect } from "react";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default () => {

  const [featuredData, setFeaturedData] = useState([null]); //State do destaque
  const [movieList, setMovieList] = useState([]); //State das listas  
  const [blackHeader, setBlackHeader] = useState(false); //State para menu ficar com fundo escuro quando barra de rolagem agir

  useEffect(() => {
    const loadAll = async () => {
      //Pegando as listas
      let list = await tmdb.getHomeLIst();
      setMovieList(list);

      //Pegando o destaque
      let trending = list.filter(i => i.slug === 'trending'); //escolhendo dentre os mais assistidos
      let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1)); //opção aleatória JS Báscio Math
      let chosen = trending[0].items.results[randomChosen]; //filme escolhido
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie')
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  useEffect(() => { //monitorar o scroll para utilizar o blackheader
    const scrollListener = () => {
      if (window.scrollY > 25) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className="page">
      <Header black={blackHeader} />
      <section className="featured">
        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }
      </section>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />
      {movieList.length <= 0 &&
        <div className="loading_page">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  )
}