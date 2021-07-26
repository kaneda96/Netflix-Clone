import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

interface BackgroundProps {
  backgroundPath: string
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: left;
  background-image: linear-gradient(
      90deg,
      var(--background) 20%,
      transparent 80%
    ),
    linear-gradient(0deg, var(--background) 1%, transparent 99%),
    url(${props => props.backgroundPath});
  z-index: -1;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: 30%;
  padding-left: 60px;

  font-size: 20px;

  h1 {
    font-size: 60px;
  }
`

export const Title = styled.div``

export const Subtitle = styled.div`
  margin-top: 1rem;
  display: flex;

  p {
    margin-right: 1rem;
  }

  p:nth-of-type(1) {
    color: green;
  }
`

export const Overview = styled.div`
  margin-top: 1rem;
  p {
    color: var(--overview-color);
  }
`

export const Buttons = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-auto-flow: column;

  a {
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 15px 25px;

    i {
      margin-right: 2px;
    }
    transition: 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }

  a:nth-of-type(1) {
    color: black;
    background: white;
  }

  a:nth-of-type(2) {
    color: white;
    margin-left: 1rem;
    background: var(--button);
  }
`

export const Gender = styled.div`
  margin-top: 1rem;
  p {
    opacity: 0.5;
    font-size: 18px;
  }
`
