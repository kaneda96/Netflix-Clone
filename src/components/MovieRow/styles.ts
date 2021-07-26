import styled from 'styled-components'

export const Row = styled.div`
  margin-bottom: 2rem;
  padding-left: 60px;
`

export const Title = styled.h2`
  margin-bottom: 0.25rem;
`

export const RowContent = styled.div`
  overflow-x: hidden;
`

export const Items = styled.div`
  width: 9999999px;
`

export const Item = styled.div`
  display: inline-block;
  width: 150px;
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
