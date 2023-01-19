import React from "react"
import { ButtonLink } from "ui/buttons"
import { H1, H2 } from "ui/typo"
import EmpresaIcon from "./empresaIcon"
import OrganizeIcon from "./organizeicon"
import QualityIcon from "./qualidadeIcon"
import {
	Base,
	BoxButton,
	BoxServices,
	CardService,
	Container,
	IconBox,
	SubTit,
	Titulo,
} from "./style"

const Pilares = () => {
	return (
		<Base>
			<Container>
				<Titulo>
					<H1 as={"h2"} color={"y2"}>
						PORQUE CONTRATAR O NANTÊ?
					</H1>
					<SubTit>
						Entenda que, para grandes eventos acontecerem com êxito, é
						necessária uma estrutura base fundamental que proporcione que todos
						os aspectos envolvidos estejam garantidos. Vamos a elas:
					</SubTit>
				</Titulo>
				<BoxServices>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Estrutura
						</H2>
						<IconBox>
							<div>
								<EmpresaIcon width={"60"} />
							</div>

							<p>
								Somos notoriamente reconhecidos por nossa capacidade e estrutura
								robusta para atender com excelência os mais variados tipos de
								evento, tudo isso sem perder de vista o sabor e o carinho que
								vão estampados na comida que produzimos.
							</p>
						</IconBox>
					</CardService>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Equipe Qualificada
						</H2>
						<IconBox>
							<div>
								<QualityIcon width={"55"} />
							</div>

							<p>
								Nossos Chefs possuem vasta experiência, trabalhando nas
								principais cozinhas do Brasil, com alto grau de exigências e
								acabamento dos pratos, além de prezarem pela execução fina dos
								cardápios, uma de nossas marcas registradas.
							</p>
						</IconBox>
					</CardService>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Segurança Alimentar
						</H2>
						<IconBox>
							<div>
								<OrganizeIcon width={"60"} />
							</div>

							<p>
								Levamos muito a sério integridade dos alimentos, são sagrados.
								Desde o armazenamento, embalagem, etiquetagem e manipulação,
								todos os processos são criteriosamente seguidos à risca, de
								forma a garantir a melhor experiência e frescor aos nossos
								convidados.
							</p>
						</IconBox>
					</CardService>
				</BoxServices>
				<BoxButton>
					<ButtonLink to={"/contato"}>ENTRE EM CONTATO</ButtonLink>
				</BoxButton>
			</Container>
		</Base>
	)
}

export default Pilares
