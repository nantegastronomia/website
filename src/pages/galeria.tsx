import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import Galeria from "ui/components/galeria"
import { H1 } from "ui/typo"
import Layout from "../ui/components/layout"

import { Base, Container, SubTit, Titulo } from "../ui/containers"

export const Head: HeadFC = () => <title>Nantê Gastronomia</title>

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<Base style={{ backgroundColor: "#FFF8EB", minHeight: "78.2vh" }}>
				<Container>
					<Titulo>
						<H1 as={"h2"} color={"y2"}>
							Galeria
						</H1>
						<SubTit>
							A excelência de nossos serviços é nossa marca registrada. E isso
							fica muito evidente quando nossos clientes se mostram felizes e
							realizados com o que entragamos a eles. Dê uma conferida:
						</SubTit>
					</Titulo>
					<Galeria />
				</Container>
			</Base>
		</Layout>
	)
}

export default IndexPage
