import { NavLink } from "react-router-dom";
import { HeaderContainer, MenuContainer, ThemesContainer } from "./styles";
import Logo from "../../assets/logo-gm.svg";
import { Sun } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            {/* Logo separada */}
            <nav>
                <NavLink to="/" title="Home">
                    <img src={Logo} />
                </NavLink>
            </nav>

            {/* Menu de navegação */}
            <MenuContainer>
                <NavLink to="/about" title="Sobre">
                    <span>SOBRE</span>
                </NavLink>
                <NavLink to="/articles" title="Artigos">
                    <span>ARTIGOS</span>
                </NavLink>
                <NavLink to="/stacks" title="Tecnologias">
                    <span>TECNOLOGIAS</span>
                </NavLink>
                <NavLink to="/projects" title="Projetos">
                    <span>PROJETOS</span>
                </NavLink>
                <NavLink to="/contacts" title="Contatos">
                    <span>CONTATOS</span>
                </NavLink>
            </MenuContainer>

            {/* Tema */}
            <ThemesContainer>
                <Sun size={24} />
            </ThemesContainer>
        </HeaderContainer>
    );
}