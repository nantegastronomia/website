import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { H1, H2 } from "ui/typo"
import { Base, BoxImg, BoxText, Container } from "./style"

const Cheff = () => {
	return (
		<Base>
			<Container>
				<BoxText>
					<H1 as={"h2"}>COZINHA SOFISTICADA, CHEFF RENOMADO E EFICIÊNCIA</H1>
					<H2 as={"h3"} bold={"n"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						suscipit beatae, iusto obcaecati sapiente dolorem quo veritatis.
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
