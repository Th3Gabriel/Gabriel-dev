import {
  ArrowRight,
  File,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "phosphor-react"
import {
  ButtonAbout,
  ButtonContainer,
  ButtonResume,
  HomeContainer,
  MediasContainer,
} from "./styles"
import { GrResume } from "react-icons/gr"
import { NavLink } from "react-router-dom"
import { About } from "../About"

export function Home() {
  return (
    <HomeContainer>
      <header>
        <h1>
          Olá, meu nome é Gabriel! Sou desenvolvedor Front-End e apaixonado por carros,
          esportes, tênis e música.
        </h1>
      </header>

      <MediasContainer>
        <a
          href="www.linkedin.com/in/gabriel-martins-317561142"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={40} />
        </a>
        <a
          href="https://www.instagram.com/gabriel_mrsp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={40} />
        </a>
        <a href="https://github.com/Th3Gabriel" target="_blank" rel="noopener noreferrer">
          <GithubLogo size={40} />
        </a>
        <a
          href="https://medium.com/@th3gabrielmartins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediumLogo size={40} />
        </a>
      </MediasContainer>

      <section>
        <p>
          Sou desenvolvedor Front-End freelancer, nascido e criado em Goiânia. Estou
          totalmente focado na área de desenvolvimento, com o propósito de me destacar e
          me tornar uma referência em engenharia de software.
        </p>
        <p>
          Além do desenvolvimento, acredito que a busca constante por aprendizado e
          inovação é essencial. Sempre estou explorando novas tecnologias, aprimorando
          minhas habilidades e colaborando em projetos desafiadores para oferecer soluções
          que façam a diferença.
        </p>
      </section>

      <ButtonContainer>
        <ButtonAbout>
          <NavLink to="/about">Leia mais sobre mim</NavLink>
          <ArrowRight />
        </ButtonAbout>
        <ButtonResume>
          Visite meu curriculo <File size={24} />
        </ButtonResume>
      </ButtonContainer>
    </HomeContainer>
  )
}
