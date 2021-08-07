import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

interface BackgroundProps {
  backgroundPath: string
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
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
  width: 30vw;
  padding-left: 60px;
`

export const ContentInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 9vh;
`

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
  display: flex;
  grid-auto-flow: column;

  a {
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0.5rem 2.5rem;

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
    /* font-size: 18px; */
  }
`
