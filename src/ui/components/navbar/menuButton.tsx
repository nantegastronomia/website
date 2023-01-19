import * as Dialog from "@radix-ui/react-dialog"
import { keyframes } from "@stitches/react"
import { Link } from "gatsby"
import React from "react"
import { CgCloseO } from "react-icons/cg"
import { styled } from "stitches.config"
import MenuIcon from "./menuIcon"
import { LinkMenu } from "./style"

const showMenuAnim = keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
})

const ButtonIcon = styled("button", {
	paddingX: "$2",
	paddingY: "$3",
	backgroundColor: "transparent",
	border: 0,
	outline: "none",
	borderRadius: "$xs",

	"&:hover": {
		backgroundColor: "#f1f1f1",
	},

	"@xs": {
		display: "flex",
	},

	"@md": {
		display: "none",
	},
})

const Conteudo = styled(Dialog.Content, {
	backgroundColor: "#fff",
	position: "fixed",
	inset: 0,
	animation: `${showMenuAnim} 500ms`,
	padding: "$4",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})

const Close = styled("div", {
	position: "absolute",
	top: 20,
	right: 20,
})
const VerticalMenu = styled("nav", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 60,
})

export default function Menu() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<ButtonIcon>
					<MenuIcon />
				</ButtonIcon>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay />

				<Conteudo>
					<VerticalMenu>
						<Dialog.Close asChild>
							<Link to={"/"}>
								<LinkMenu>HOME</LinkMenu>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link to={"/servicos"}>
								<LinkMenu>SERVIÇOS</LinkMenu>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link to={"/a-empresa"}>
								<LinkMenu>A EMPRESA</LinkMenu>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link to={"/galeria"}>
								<LinkMenu>GALERIA</LinkMenu>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link to={"/contato"}>
								<LinkMenu>CONTATO</LinkMenu>
							</Link>
						</Dialog.Close>
					</VerticalMenu>

					<Dialog.Close asChild>
						<Close>
							<CgCloseO size={40} />
						</Close>
					</Dialog.Close>
				</Conteudo>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
