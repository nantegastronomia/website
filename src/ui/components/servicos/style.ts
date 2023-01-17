import { styled } from "stitches.config"

export const Servico = styled("div", {
	width: "100%",
	display: "flex",

	marginBottom: "$8",

	"@xs": { flexDirection: "column", gap: "$2" },
	"@lg": { flexDirection: "row", gap: "$6" },
})

export const Side = styled("div", {
	flex: 1,
})

export const Foto = styled("div", {
	borderRadius: "$md",
	border: "6px solid",
	borderColor: "$yellow100",
	overflow: "hidden",
	maxHeight: "300px",
	display: "flex",

	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
})

export const Texto = styled("div", {
	display: "flex",
	flexDirection: "column",
	width: "100%",
	justifyContent: "center",

	"@xs": { textAlign: "center" },
	"@lg": { height: "100%" },

	variants: {
		align: {
			left: { textAlign: "left" },
			right: { textAlign: "right" },
		},
	},
})

export const Mobile = styled("div", {
	"@xs": { display: "auto" },
	"@lg": { display: "none" },
})
export const Desktop = styled("div", {
	"@xs": { display: "none" },
	"@lg": { display: "block" },
})
