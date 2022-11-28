import { StaticImage } from "gatsby-plugin-image"
import { styled } from "stitches.config"
import { ContainerCenter } from "ui/containers"

export const Container = styled(ContainerCenter, {
	justifyContent: "space-between",
	alignItems: "center",
	gap: "$6",
	paddingY: "8rem",
	backgroundColor: "#FFFFFF",
	flexDirection: "column",

	"@xs": { justifyContent: "center", paddingX: "$2", textAlign: "center" },
	"@md": { paddingX: "$6" },
	"@lg": { paddingX: "$3" },
})

export const BoxCard = styled("div", {
	marginTop: "$6",
	display: "flex",
	gap: "$6",
	flexWrap: "wrap",
	justifyContent: "center",

	"@xs": { flexDirection: "column" },
	"@md": { flexDirection: "row" },
})

export const Card = styled("div", {
	"@xs": {
		maxWidth: "100%",
	},
	"@md": { maxWidth: "210px" },
})
export const Avatar = styled(StaticImage, {
	overflow: "hidden",
	borderRadius: "$full",
	border: "10px solid",
	borderColor: "$yellow200",
	width: "210px",
})
export const Name = styled("div", {
	color: "$yellow200",
	fontWeight: "700",
	fontSize: "$2",
})
export const Job = styled("div", {
	color: "#777",
})
export const Testimony = styled("div", {
	marginTop: "$4",
	color: "#777",
})
