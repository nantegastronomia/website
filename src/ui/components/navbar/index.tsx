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
						<h2 style={{ fontSize: 0 }}>Navegação Principal</h2>

						<Link to={"/servicos"}>
							<LinkMenu>SERVIÇOS</LinkMenu>
						</Link>

						<Link to={"/a-empresa"}>
							<LinkMenu>A EMPRESA</LinkMenu>
						</Link>

						<Link to={"/galeria"}>
							<LinkMenu>GALERIA</LinkMenu>
						</Link>

						<Link to={"/contato"}>
							<LinkMenu>CONTATO</LinkMenu>
						</Link>
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
