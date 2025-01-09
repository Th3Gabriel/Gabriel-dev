import { ArrowRight, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, MediumLogo } from "phosphor-react";
import { FooterContainer, MessageContainer, SocialMediasContainer } from "./styles";


export function Footer(){
    return(
        <FooterContainer>
            <SocialMediasContainer>
                <nav>

                <LinkedinLogo size={24}/>
                <GithubLogo size={24}/>
                <MediumLogo  size={24}/>
                <InstagramLogo size={24}/>
                <EnvelopeSimple size={24}/>

                </nav>
                <span>
                    Create by Gabriel Martins
                </span>

            </SocialMediasContainer>

            <MessageContainer>
                <span>
                    Para Mais informações entre em contato comigo.
                </span>
                <span>
                    <a href="mailto:gabrielmartins1955@hotmail.com" color="#fff">
                    <ArrowRight size={24} cursor="Pointer" />
                    </a>
                </span>
            </MessageContainer>

        </FooterContainer>
    )
}