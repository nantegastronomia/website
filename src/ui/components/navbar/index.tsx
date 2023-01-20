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
						<LogoNante width={105} />
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

						<a href='https://wa.me/552123914422'>
							<LinkMenu>CONTATO</LinkMenu>
						</a>
					</BoxMenu>
				</Box>

				<SocialBox>
					<a
						href={"https://www.facebook.com/profile.php?id=100089636586789"}
						target={"_blank"}>
						<Face />
					</a>
					<a
						href={"https://www.instagram.com/nantegastronomia/"}
						target={"_blank"}>
						<Insta />
					</a>
				</SocialBox>
			</Container>
		</Base>
	)
}
