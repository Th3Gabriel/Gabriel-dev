import { Icons } from "./styles"

interface IconsProps {
  Logo: React.ElementType // Define que `Logo` é um componente React
  nameLogo: string
  corLogo: string
}

export function IconsCard({ Logo, nameLogo, corLogo }: IconsProps) {
  return (
    <Icons>
      <Logo size={50} color={corLogo} /> {/* Renderiza o componente dinamicamente */}
      <p>{nameLogo}</p>
    </Icons>
  )
}
