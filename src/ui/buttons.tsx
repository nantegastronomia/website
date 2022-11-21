import { Link } from "gatsby"
import { styled } from "stitches.config"

export const Button = styled("button", {
	color: "white",
	backgroundColor: "$yellow200",
	fontWeight: "$2",
	paddingX: "$2",
	paddingY: "$1",
	border: 0,
	fontSize: "$1",
	borderRadius: "$xs",
	transition: "0.2s",
	alignSelf: "flex-start",

	"&:hover": { backgroundColor: "$yellow100" },

	variants: {
		color: {
			y1: { color: "$yellow100" },
			y2: { color: "$yellow200" },
		},
	},

	"@xs": { alignSelf: "auto" },

	"@md": { alignSelf: "flex-start" },
})

export const ButtonLink = styled("a", {
	color: "white",
	backgroundColor: "$yellow200",
	fontWeight: "$2",
	paddingX: "$3",
	paddingY: "$2",
	border: 0,
	fontSize: "$1",
	borderRadius: "$xs",
	transition: "0.2s",
	alignSelf: "flex-start",
	textDecoration: "none",

	"&:hover": { backgroundColor: "$yellow100" },

	variants: {
		color: {
			y1: { color: "$yellow100" },
			y2: { color: "$yellow200" },
		},
	},

	"@xs": { alignSelf: "auto" },

	"@md": { alignSelf: "flex-start" },
})

export const MyLink = styled(Link, {
	color: "$black100",
	fontWeight: "$2",
	fontSize: "$1",
	transition: "0.2s",
	cursor: "pointer",
	textDecoration: "none",

	"&:hover": {
		color: "$yellow200",
	},

	variants: {
		color: {
			y1: {
				color: "$yellow100",
			},
			y2: {
				color: "$yellow200",
			},
		},
	},
})
