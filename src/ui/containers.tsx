import { styled } from "stitches.config"

export const Box = styled("div", {
	display: "flex",
	gap: "$1",
	justifyContent: "start",

	variants: {
		gap: {
			1: {
				gap: "$1",
			},
			2: {
				gap: "$2",
			},
			3: {
				gap: "$3",
			},
			4: {
				gap: "$4",
			},
			5: {
				gap: "$5",
			},
		},
		dir: {
			col: { flexDirection: "column" },
			row: { flexDirection: "row" },
		},

		vAlingn: {
			center: {
				alignItems: "center",
			},
		},

		hAlingn: {
			start: {
				justifyContent: "start",
			},
			center: {
				justifyContent: "center",
			},
		},
	},
})

export const ContainerCenter = styled("div", {
	maxWidth: "$6",
	margin: "0 auto",
})
