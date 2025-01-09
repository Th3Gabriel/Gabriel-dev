import styled from "styled-components"

export const HomeContainer = styled.main`
  border-radius: 18px;
  padding: 4rem 2rem;
  height: 50rem;

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme["Branco"]};
  }
  p {
    margin-top: 2rem;
    line-height: 1.6;
    font-size: 1.1rem;
    color: ${(props) => props.theme["Gray-100"]};
  }
`

export const MediasContainer = styled.div`
  display: flex;
  padding: auto 2rem;
  align-items: center;
  gap: 1rem;

  a {
    color: ${(props) => props.theme["Gray-100"]};
    text-decoration: none;
    svg {
      transition: color 0.3s;
    }
    &:hover svg {
      color: ${(props) => props.theme["Gray-500"]};
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 1rem;
`

export const Button = styled.button`
  border-radius: 16px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 2rem;
  height: 3rem;

  cursor: pointer;

  font-family: "Geist Mono", sans-serif;
  font-weight: bold;
`

export const ButtonResume = styled(Button)`
  background-color: ${(props) => props.theme["Gray-900"]};
  color: ${(props) => props.theme["Gray-100"]};

  &:hover {
    color: ${(props) => props.theme["Gray-500"]};
  }
`
export const ButtonAbout = styled(Button)`
  a {
    text-decoration: none;
    color: ${(props) => props.theme["Gray-900"]};
  }
  &:hover a {
    color: ${(props) => props.theme["Gray-200"]};
  }
`
