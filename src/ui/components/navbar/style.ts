import { styled } from "stitches.config"
import FacebookIcon from "./facebookIcon"
import InstagramIcon from "./instagramIcon"

export const Base = styled("div", {
	width: "100%",
	paddingY: "$3",
	paddingX: "$3",
})

export const Container = styled("div", {
	display: "flex",
	flexDirection: "row",
	width: "100%",
	maxWidth: "$6",
	justifyContent: "space-between",
	alignItems: "center",
	margin: "0 auto",
})

export const Box = styled("div", {
	display: "flex",
	alignItems: "center",

	"@md": {
		gap: "$8",
	},
})
export const SocialBox = styled("div", {
	display: "flex",
	alignItems: "center",

	"@xs": { gap: "$1" },
	"@lg": { gap: "$2" },
})

export const LinkMenu = styled("h3", {
	color: "$black100",
	fontWeight: "$2",
	fontSize: "$1",
	transition: "0.3s",
	cursor: "pointer",
	textDecoration: "none",
	borderBottom: "3px solid",
	borderBottomColor: "transparent",
	padding: "$2",

	"&:hover": {
		color: "$yellow200",
		borderBottomColor: "$yellow200",
	},
})

export const BoxMenu = styled("nav", {
	width: "100%",
	display: "flex",
	gap: "$3",
	alignItems: "center",

	"@xs": {
		display: "none",
	},
	"@md": {
		display: "flex",
	},
})

export const Face = styled(FacebookIcon, {
	fill: "#9A9A9A",
	transition: "0.2s",

	"&:hover": {
		fill: "#cd7713",
	},
})
export const Insta = styled(InstagramIcon, {
	fill: "#9A9A9A",
	transition: "0.2s",

	"&:hover": {
		fill: "#cd7713",
	},
})
