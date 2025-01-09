import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPython,
  SiVite,
  SiDocker,
  SiFigma,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { StackContainer, StacksMain, TextContainer } from "./styles"
import { IconsCard } from "./components/Icons"

const iconsArray = [
  { icon: SiHtml5, size: 50, color: "#E34F26", label: "HTML" },
  { icon: SiCss3, size: 50, color: "#1572B6", label: "CSS" },
  { icon: SiJavascript, size: 50, color: "#F7DF1E", label: "JAVASCRIPT" },
  { icon: SiReact, size: 50, color: "#61DAFB", label: "REACT JS" },
  { icon: SiTypescript, size: 50, color: "#3178C6", label: "TYPESCRIPT" },
  { icon: SiPython, size: 50, color: "#3776AB", label: "PYTHON" },
  { icon: SiVite, size: 50, color: "#646CFF", label: "VITE" },
  { icon: VscVscode, size: 50, color: "#1572B6", label: "VSCODE" },
  { icon: SiDocker, size: 50, color: "#2496ED", label: "DOCKER" },
  { icon: SiFigma, size: 50, color: "#F24E1E", label: "FIGMA" },
]

export function Stacks() {
  return (
    <StackContainer>
      <TextContainer>
        <h1>Tecnologias</h1>
        <p>
          Softwares, ferramentas, linguagens e serviços que utilizo no meu dia a dia.
          Então decidi listar tudo em um só lugar.
        </p>
      </TextContainer>

      <StacksMain>
        {iconsArray.map((icon, index) => (
          <IconsCard
            key={index}
            Logo={icon.icon}
            nameLogo={icon.label}
            corLogo={icon.color}
          />
        ))}
      </StacksMain>
    </StackContainer>
  )
}
