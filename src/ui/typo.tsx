import { styled } from "../stitches.config"

export const Text = styled("p", {
	color: "$black100",
	fontSize: "$1",
	fontWeight: "$2",
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

export const Heading = styled("h1", {
	color: "$black100",

	variants: {
		bold: {
			y: { fontWeight: "$2" },
			n: { fontWeight: "$1" },
		},
		size: {
			1: { fontSize: "$3" },
			2: { fontSize: "$1" },
		},
		color: {
			w: { color: "#FFFFFF" },
			y1: {
				color: "$yellow100",
			},
			y2: {
				color: "$yellow200",
			},
		},
	},
})

export const H2 = styled("h2", {
	color: "$black100",
	fontSize: "$5",
	fontWeight: "$2",
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

export const H3 = styled("h3", {
	color: "$black100",
	fontSize: "$4",
	fontWeight: "$2",
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
export const Subheading = styled("p", {
	color: "$black100",
	fontSize: "$3",
	fontWeight: "$1",
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
export const CardTitle = styled("p", {
	color: "$black100",
	fontSize: "$2",
	fontWeight: "$2",
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
