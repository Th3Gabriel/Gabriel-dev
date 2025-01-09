import styled from "styled-components";

export const HeaderContainer = styled.header`
    display:flex ;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;
    margin: 0.5rem auto;
    
    border-bottom: 1px solid ${(props) => props.theme["Gray-200"]};
`
export const MenuContainer = styled.nav`
    
    a {
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    margin-right: 1rem;
    color: ${(props) => props.theme["Gray-200"]};

    transition: all 0.3s ease-in-out; /* Alteração para suavizar várias propriedades */
    position: relative; /* Necessário para efeitos com pseudo-elementos */
}

a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme["Gray-200"]};
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
}

a:hover::before {
    width: 100%; /* Linha aparece suavemente */
}

a:hover {
    padding: 0.5rem;
    border-radius: 8px;
    color: ${(props) => props.theme["Branco"]};
    transform: scale(1.05); 
}


    
    `
    export const ThemesContainer = styled.div` 
    padding: 0.5rem;
    
    
    `