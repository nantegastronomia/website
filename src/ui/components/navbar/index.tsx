import { Link } from "gatsby"
import React from "react"
import LogoNante from "./logo"
import Menu from "./menuButton"
import {
	Base,
	Box,
	BoxMenu,
	Container,
	Face,
	Insta,
	LinkMenu,
	SocialBox,
} from "./style"

export default function Navbar() {
	return (
		<Base>
			<Container>
				<Menu />

				<Box>
					<Link to={"/"}>
						<a>
							<LogoNante width={105} />
						</a>
					</Link>
					<BoxMenu>
						<LinkMenu to={"/servicos"}>SERVIÇOS</LinkMenu>
						<LinkMenu to={"/a-empresa"}>A EMPRESA</LinkMenu>
						<LinkMenu to={"/galeria"}>GALERIA</LinkMenu>
						<LinkMenu to={"/contato"}>CONTATO</LinkMenu>
					</BoxMenu>
				</Box>

				<SocialBox>
					<a href={"https://facebook.com"} target={"_blank"}>
						<a>
							<Face />
						</a>
					</a>
					<a href={"https://facebook.com"} target={"_blank"}>
						<a>
							<Insta />
						</a>
					</a>
				</SocialBox>
			</Container>
		</Base>
	)
}
