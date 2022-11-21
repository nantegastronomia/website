import React from "react"
import { styled } from "stitches.config"
import { ButtonLink } from "ui/buttons"
import { Heading } from "ui/typo"

import Bg from "images/hero.jpg"

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

const Container = styled("div", {
	display: "flex",
	width: "100%",
	maxWidth: "$6",
	margin: "0 auto",
	zIndex: "2",
})
const BoxText = styled("section", {
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
					<Heading size={1} color={"w"}>
						CASAMENTOS,
						<br /> 15 ANOS E <br />
						FORMATURAS
					</Heading>
					<Heading as={"h2"} size={2} color={"w"} bold={"n"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						suscipit beatae, iusto obcaecati sapiente dolorem quo veritatis.
					</Heading>
					<ButtonLink href={"/servicos"}>
						<a>VEJA NOSSOS SERVIÇOS</a>
					</ButtonLink>
				</BoxText>
			</Container>
		</Base>
	)
}
