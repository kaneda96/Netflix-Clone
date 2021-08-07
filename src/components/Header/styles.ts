import styled from 'styled-components'

interface ContainerProps {
  blackHeader?: boolean
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  z-index: 10;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  transition: 0.4s;
  background: rgba(20, 20, 20, ${props => (props.blackHeader ? 1 : 0)});
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    margin: 0 0.75rem;
    font-size: 0.875rem;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`

export const LogoLink = styled.a``

export const MobileList = styled.select``

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  max-width: 100px;
  max-height: 96px;
`

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img {
    max-width: 32px;
    max-height: 32px;
  }
`
