import { styled } from "stitches.config"
import { ContainerCenter } from "ui/containers"

export const Base = styled("div", {
	width: "100%",
	backgroundColor: "#333333",
})

export const BoxLink = styled("div", {
	display: "flex",
	gap: "$6",
})
export const Container = styled(ContainerCenter, {
	paddingY: "$5",
	justifyContent: "space-between",
	alignItems: "center",
})

export const TextFooter = styled("h2", {
	fontSize: "$0",
	fontWeight: "400",
	color: "white",
})
export const LinkMenuFooter = styled("h3", {
	fontSize: "$1",

	"& a": {
		transition: "0.5s",
		textDecoration: "none",
		color: "white",

		"&:hover": {
			color: "$yellow100",
		},
	},
})
