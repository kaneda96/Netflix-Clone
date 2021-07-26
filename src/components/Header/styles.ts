import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  z-index: 10;
  background: transparent;
  width: 100vw;
  height: 68px;
  display: flex;
  align-items: center;
  padding-left: 60px;
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

export const LogoContainer = styled.div``

export const LogoLink = styled.a``

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 30px;

  max-width: 100px;
  max-height: 96px;
`
