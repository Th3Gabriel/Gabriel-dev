import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
`
export const SocialMediasContainer = styled.nav`
  display: flex;
  flex-direction: column;
  svg {
    margin-right: 0.2rem;
  }
  svg:hover {
    color: ${(props) => props.theme["Yellow-500"]};
    cursor: pointer;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    text-decoration: none;
    color: ${(props) => props.theme["Branco"]};
    cursor: pointer;
  }
  svg:hover {
    color: ${(props) => props.theme["Yellow-500"]};
  }
`
