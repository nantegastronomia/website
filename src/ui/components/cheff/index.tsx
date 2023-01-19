import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { H1, H2 } from "ui/typo"
import { Base, BoxImg, BoxText, Container } from "./style"

const Cheff = () => {
	return (
		<Base>
			<Container>
				<BoxText>
					<H1 as={"h2"}>
						“Uma experiência inovadora onde temperos e sabores da cozinha de
						vanguarda se misturam.”
					</H1>
					<H2 as={"h3"} bold={"n"}>
						Procuramos na elaboração dos nossos cardápios estabelecer um resgate
						afetivo com os alimentos, comida de verdade, ativando algumas de
						nossas capacidades sensoriais: visão, olfato e paladar. Dessa forma,
						estimulamos sensações boas e prazerosas.
					</H2>
				</BoxText>
				<BoxImg>
					<StaticImage
						src='./cheff.png'
						alt='cheff'
						placeholder='blurred'
						layout='constrained'
						tracedSVGOptions={{ color: `#cd7713` }}
						blurredOptions={{ width: 50 }}
					/>
				</BoxImg>
			</Container>
		</Base>
	)
}

export default Cheff
