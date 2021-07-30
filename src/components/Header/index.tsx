import { useEffect } from 'react'
import {
  Container,
  List,
  MenuContainer,
  UserInfoContainer,
  Logo,
  LogoLink
} from './styles'
import avatar from '../../assets/Netflix-avatar.png'
import { useState } from 'react'

export default function Header() {
  const [showBlackHeader, setBlackHeader] = useState(false)

  //Pega objeto que contem a posição do body
  const bodyRect = document.body.getBoundingClientRect()
  //Pega objeto que contem a posição da primeira Section
  const firstSectionRect = document.querySelector('section')

  //Adiciona evento no scroll
  window.addEventListener('scroll', e => {
    //Verifica se existe uma section
    if (firstSectionRect) {
      //Verifica a posição vertical do body em relação a primeira section
      const sectionElementPosition =
        firstSectionRect.getBoundingClientRect().top - bodyRect.top

      //verifica se a posição do scroll da tela é menor que a do primeiro section
      if (sectionElementPosition <= window.pageYOffset) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
  })

  return (
    <Container blackHeader={showBlackHeader}>
      <MenuContainer>
        <LogoLink href="#">
          <Logo
            src="https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Logo"
          />
        </LogoLink>
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
      </MenuContainer>
      <UserInfoContainer>
        <img src={avatar} alt="" />
      </UserInfoContainer>
    </Container>
  )
}
