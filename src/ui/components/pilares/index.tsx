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
						NOSSOS PILARES
					</H1>
					<SubTit>
						Lorem ipsum dolor sit amet consectetur. Tempor rutrum nisi molestie
						id in risus. Penatibus adipiscing sit tincidunt purus ultrices
						facilisi. Fermentum auctor tellus nunc sed vel.
					</SubTit>
				</Titulo>
				<BoxServices>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Sua Empresa
						</H2>
						<IconBox>
							<EmpresaIcon width={"230"} />

							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</IconBox>
					</CardService>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Qualidade
						</H2>
						<IconBox>
							<QualityIcon width={"230"} />

							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</IconBox>
					</CardService>
					<CardService>
						<H2 as={"h3"} color={"y2"}>
							Organização
						</H2>
						<IconBox>
							<OrganizeIcon width={"230"} />

							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
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
