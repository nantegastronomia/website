import React from "react"
import { H1, H2 } from "ui/typo"
import CheffImg from "./cheff.png"
import { Base, BoxImg, BoxText, Container, ImgCheff } from "./style"

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
					{/* <ButtonLink href={"/servicos"}>
						<a>VEJA NOSSOS SERVIÇOS</a>
					</ButtonLink> */}
				</BoxText>
				<BoxImg>
					<ImgCheff src={CheffImg} alt={"Cheff Nantê"} />
				</BoxImg>
			</Container>
		</Base>
	)
}

export default Cheff
