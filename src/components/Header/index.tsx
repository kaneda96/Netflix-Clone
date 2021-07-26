import { Container, List, LogoContainer, Logo, LogoLink } from './styles'

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <LogoLink href="#">
          <Logo
            src="https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Logo"
          />
        </LogoLink>
      </LogoContainer>
      <List>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Séries</a>
        </li>
        <li>
          <a href="#">Filmes</a>
        </li>
        <li>
          <a href="#">Bombando</a>
        </li>
        <li>
          <a href="#">Minha lista</a>
        </li>
      </List>
    </Container>
  )
}
