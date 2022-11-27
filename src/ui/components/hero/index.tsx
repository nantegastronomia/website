import React from "react"
import { ButtonLink } from "ui/buttons"
import { H1, H2 } from "ui/typo"
import { Base, BoxText, Container } from "./style"

export default function Hero() {
	return (
		<Base>
			<Container>
				<BoxText>
					<H1 as={"h2"} color={"w"} bold={"s"}>
						CASAMENTOS,
						<br /> 15 ANOS E <br />
						FORMATURAS
					</H1>
					<H2 as={"h3"} color={"w"} bold={"n"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						suscipit beatae, iusto obcaecati sapiente dolorem quo veritatis.
					</H2>
					<ButtonLink to={"/servicos"}>VEJA NOSSOS SERVIÇOS</ButtonLink>
				</BoxText>
			</Container>
		</Base>
	)
}
