import styled from 'styled-components'

export const Container = styled.div`
  height: 5rem;
  padding: 0 30px;
  background: ${props => props.theme.purple500};
  color: ${props => props.theme.white};

  display: flex;
  align-items: center;
`