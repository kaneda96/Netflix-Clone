import React from 'react'
import { useState } from 'react'
import {
  Row,
  RowContent,
  Title,
  Image,
  Items,
  Item,
  ScrollRight,
  ScrollLeft
} from './styles'

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
  const itemsDivWidth = movies.length * 150

  const [scrollX, setScrollX] = useState(0)

  const ScrollRightHandler = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let scrollSpace = window.innerWidth - itemsDivWidth
    if (scrollSpace > x - 60) {
      x = scrollSpace - 60
    }
    console.log(scrollSpace, x)
    setScrollX(x)
  }

  const ScrollLeftHandler = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    console.log(x)
    setScrollX(x)
  }

  return (
    <Row>
      <Title>{title}</Title>
      <RowContent>
        <Items marginLeft={scrollX} itemsSize={itemsDivWidth}>
          {scrollX !== 0 && (
            <ScrollLeft onClick={ScrollLeftHandler}>
              <i className="icon-keyboard_arrow_left" />
            </ScrollLeft>
          )}

          <ScrollRight onClick={ScrollRightHandler}>
            <i className="icon-keyboard_arrow_right" />
          </ScrollRight>
          {movies
            .filter(m => m.poster_path)
            .map((item, key) => {
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
