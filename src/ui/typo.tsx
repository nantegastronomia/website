import { styled } from "stitches.config"

export const H1 = styled("h1", {
	color: "$black100",
	variants: {
		bold: {
			s: { fontWeight: "700" },
			n: { fontWeight: "400" },
		},
		color: {
			w: { color: "#FFFFFF" },
			y1: { color: "$yellow100" },
			y2: { color: "$yellow200" },
		},
	},

	"@xs": { fontSize: "$2" },
	"@md": { fontSize: "$4" },
})

export const H2 = styled("h1", {
	color: "$black100",
	fontSize: "$1",
	variants: {
		bold: {
			s: { fontWeight: "700" },
			n: { fontWeight: "400" },
		},
		color: {
			w: { color: "#FFFFFF" },
			y1: { color: "$yellow100" },
			y2: { color: "$yellow200" },
		},
	},

	"@xs": { fontSize: "$2" },
})
