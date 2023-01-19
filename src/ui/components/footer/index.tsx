import { Link } from "gatsby"
import React from "react"
import { Base, BoxLink, Container, LinkMenuFooter, TextFooter } from "./style"

const Footer = () => {
	return (
		<Base>
			<Container as={"nav"}>
				<h2 style={{ fontSize: 0 }}>Navegação</h2>
				<BoxLink>
					<LinkMenuFooter>
						<Link to={"/"}>HOME</Link>
					</LinkMenuFooter>
					<LinkMenuFooter>
						<Link to={"/"}>SERVIÇOS</Link>
					</LinkMenuFooter>
					<LinkMenuFooter>
						<Link to={"/"}>A EMPRESA</Link>
					</LinkMenuFooter>
					<LinkMenuFooter>
						<Link to={"/"}>GALERIA</Link>
					</LinkMenuFooter>
					<LinkMenuFooter>
						<Link to={"/"}>CONTATO</Link>
					</LinkMenuFooter>
				</BoxLink>
				<TextFooter>
					Nantê Gastronomia &copy;2022 - cnpj: XX.XXX.XXX/0001-AA
				</TextFooter>
			</Container>
		</Base>
	)
}

export default Footer
