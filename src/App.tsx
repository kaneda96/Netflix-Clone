import React, { useEffect, useState } from 'react'
import { getHomeList, getMovieDetails } from './Database/tmdb'
import MovieRow from './components/MovieRow'
import './styles/global.css'
import Header from './components/Header'
import FeatureMovie from './components/FeatureMove'

type MovieList = {
  slug: string
  title: string
  movies: {
    results: []
  }
}

function App() {
  const [movieList, setMovieList] = useState<MovieList[]>([])
  const [FeaturedMovie, setFeaturedMovie] = useState()

  useEffect(() => {
    const loadScreen = async () => {
      //Pega a lista contendo todos os filmes
      const list = await getHomeList()
      setMovieList(list)

      //Pega um filme aleatório em destaque
      const originals = list.filter(m => m.slug === 'originals')
      const randomChoosing = Math.floor(
        Math.random() * (originals[0].movies.results.length - 1)
      )
      const movieChoosen = originals[0].movies.results[randomChoosing]

      const movieChoosenDetails = await getMovieDetails(movieChoosen.id)

      setFeaturedMovie(movieChoosenDetails)
    }

    loadScreen()
  }, [])

  return (
    <>
      <Header />
      {FeaturedMovie && <FeatureMovie featuredMovie={FeaturedMovie} />}
      {movieList.map((item, key) => {
        return (
          <MovieRow
            key={key}
            movies={item.movies.results}
            title={item.title}
            slug={item.slug}
          />
        )
      })}
    </>
  )
}

export default App
