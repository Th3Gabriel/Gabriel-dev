import styled from "styled-components"

export const StackContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.6;
  }
  p {
    color: ${(props) => props.theme["Gray-100"]};
  }
`
export const StacksMain = styled.main`
  padding: 3rem 0;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1.5rem;
`
