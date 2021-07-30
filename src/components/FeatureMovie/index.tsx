import { backgroundUrl } from '../../Database/tmdb'
import {
  Container,
  Background,
  Content,
  Subtitle,
  Overview,
  Buttons,
  Gender
} from './styles'

interface IFeatureMovieProps {
  featuredMovie: any
}

export default function FeatureMovie({ featuredMovie }: IFeatureMovieProps) {
  const {
    name,
    overview,
    vote_average,
    first_air_date,
    number_of_seasons,
    genres,
    backdrop_path
  } = featuredMovie

  const airDate = new Date(first_air_date)

  return (
    <Container>
      <Background backgroundPath={backgroundUrl(backdrop_path)}></Background>
      <Content>
        <h1>{name}</h1>
        <Subtitle>
          <p> {`${vote_average} pontos `}</p>
          <p> {`${airDate.getUTCFullYear()}`}</p>
          <p>
            {number_of_seasons > 1
              ? `${number_of_seasons} temporadas`
              : `${number_of_seasons} temporada`}
          </p>
        </Subtitle>
        <Overview>
          <p>{overview}</p>
        </Overview>
        <Buttons>
          <a>
            <i className={'icon-play'} /> Assistir
          </a>
          <a>
            <i className={'icon-add'} />
            Minha Lista
          </a>
        </Buttons>
        <Gender>
          <p>{`Gêneros: ${genres.reduce(
            (acc: any, cur: any) =>
              acc === '' ? (acc = cur.name) : acc + ', ' + cur.name,
            ''
          )}`}</p>
        </Gender>
      </Content>
    </Container>
  )
}
