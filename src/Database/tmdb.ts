const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'd2a2773db350dcc2490e23e23e541161'
const NETWORK = '213' //netflix

async function BasicFetch(endPoint: string) {
  const req = await fetch(`${BASE_URL}${endPoint}`)
  const json = await req.json()
  return json
}

export const backgroundUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`
}

export async function getMovieDetails(id: string) {
  const movieDetails = await BasicFetch(
    `tv/${id}?api_key=${API_KEY}&language=pt-BR`
  )
  return movieDetails
}

export async function getHomeList() {
  const homeList = [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      movies: await BasicFetch(
        `discover/tv?with_network=${NETWORK}&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomendações',
      movies: await BasicFetch(
        `trending/all/week?&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      movies: await BasicFetch(
        `movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'action',
      title: 'Ação',
      movies: await BasicFetch(
        `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'adventure',
      title: 'Aventura',
      movies: await BasicFetch(
        `discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      movies: await BasicFetch(
        `discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'animation',
      title: 'Animação',
      movies: await BasicFetch(
        `discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'horror',
      title: 'Horror',
      movies: await BasicFetch(
        `discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      )
    }
  ]

  return homeList
}
