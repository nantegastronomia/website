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

export const ContainerCenter = styled("section", {
	maxWidth: "$6",
	margin: "0 auto",
	display: "flex",
	width: "100%",
})

export const Base = styled("div", {
	paddingX: "$6",
	paddingY: "$4",
})

export const Container = styled(ContainerCenter, {
	gap: "$8",
	flexDirection: "column",
})

export const Titulo = styled("div", {
	width: "100%",
})

export const SubTit = styled(Titulo, { marginTop: "$2", lineHeight: "1.4rem" })
