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

	"@xs": { flexDirection: "column", gap: "$3" },
	"@lg": { flexDirection: "row" },
})

export const TextFooter = styled("p", {
	color: "darkgrey",
	fontWeight: "400",

	"@xs": { fontSize: "0.7rem" },
	"@md": { fontSize: "$0" },
})
export const LinkMenuFooter = styled("h3", {
	"& a": {
		transition: "0.5s",
		textDecoration: "none",
		color: "white",

		"&:hover": {
			color: "$yellow100",
		},
	},

	"@xs": { fontSize: "0.5rem" },
	"@sm": { fontSize: "0.7rem" },
	"@lg": { fontSize: "$1" },
})
