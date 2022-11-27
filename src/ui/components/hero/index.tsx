import React from "react"
import { styled } from "stitches.config"
import { ButtonLink } from "ui/buttons"
import { H1, H2 } from "ui/typo"

import Bg from "./hero.jpg"

const Base = styled("div", {
	width: "100%",
	paddingX: "$6",
	paddingY: "$8",
	display: "flex",
	alignItems: "center",
	position: "relative",
	backgroundImage: `url(${Bg})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
})

const Container = styled("section", {
	display: "flex",
	width: "100%",
	maxWidth: "$6",
	margin: "0 auto",
})
const BoxText = styled("div", {
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: "$3",

	"@xs": { width: "100%", textAlign: "center", justifyContent: "center" },
	"@md": { width: "45%", textAlign: "left", justifyContent: "start" },
})

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
