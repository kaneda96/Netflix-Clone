import styled from 'styled-components'

export const Row = styled.section`
  //overflow-x: hidden;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 60px;
`

export const Title = styled.h2`
  margin-bottom: 0.25rem;
`

export const RowContent = styled.div``

interface ItemsProps {
  itemsSize: number
  marginLeft: number
}

export const Items = styled.div<ItemsProps>`
  width: ${props => props.itemsSize}px;
  margin-left: ${props => props.marginLeft}px;
  transition: 0.5s;
`

export const Item = styled.div`
  display: inline-flex;
  width: 150px;
  img {
    border-radius: 5px;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 1px;
  transform: scale(0.9);
  transition: 0.2s;

  :hover {
    transform: scale(1);
  }
`

const Scroll = styled.div`
  display: flex;
  align-items: center;

  font-size: 50px;

  cursor: pointer;

  height: 225px;
  width: 100px;

  position: absolute;
  z-index: 10;

  transition: 0.2s;

  opacity: 0;

  :hover {
    opacity: 1;
  }
`

export const ScrollRight = styled(Scroll)`
  justify-content: flex-end;
  right: 0;
  background: linear-gradient(to left, var(--background) 10%, transparent 90%);
`
export const ScrollLeft = styled(Scroll)`
  justify-content: flex-start;
  left: 0;
  background: linear-gradient(to right, var(--background) 10%, transparent 90%);
`
