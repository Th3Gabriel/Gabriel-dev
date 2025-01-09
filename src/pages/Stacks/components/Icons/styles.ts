import styled from "styled-components"

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme["Gray-200"]};
  padding: 2rem 4rem;
  border-radius: 8px;
  flex-direction: column;

  &:hover {
    border: 1px solid ${(props) => props.theme["Branco"]};
    transition: 0.2s ease-in-out;
  }
  p {
    font-size: 0.875rem;
    font-weight: bold;
    padding-top: 1rem;
    color: ${(props) => props.theme["Branco"]};
  }
`
