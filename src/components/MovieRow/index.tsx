import React from 'react'
import { Row, RowContent, Title, Image, Items, Item } from './styles'

interface IMovieRowProps {
  slug: string
  title: string
  movies: Movie[]
}

type Movie = {
  poster_path: string
  original_title: string
}

export default function MovieRow({ title, movies, slug }: IMovieRowProps) {
  return (
    <Row>
      <Title>{title}</Title>
      <RowContent>
        <Items>
          {movies.map((item, key) => {
            return (
              <Item key={key}>
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </Item>
            )
          })}
        </Items>
      </RowContent>
    </Row>
  )
}
