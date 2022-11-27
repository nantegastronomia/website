import Bg from "images/bg-lotus.jpg"
import { styled } from "stitches.config"
import { ContainerCenter } from "ui/containers"

export const Base = styled("div", {
	paddingX: "$6",
	paddingY: "$8",
	backgroundColor: "#FFF8EB",
	backgroundImage: `url(${Bg})`,
})

export const Container = styled(ContainerCenter, {
	justifyContent: "space-between",
	alignItems: "center",
	gap: "$6",

	"@xs": { flexDirection: "column", justifyContent: "center" },
	"@md": { flexDirection: "row", justifyContent: "space-between" },
})

export const BoxText = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$4",
	width: "100%",

	"@xs": { textAlign: "center" },
	"@md": { textAlign: "left" },
})

export const BoxImg = styled("div", {
	display: "flex",
	justifyContent: "center",

	"@xs": { width: "100%" },
	"@md": { width: "50%", justifyContent: "end" },
	"@lg": { justifyContent: "start" },
	"@2xl": { justifyContent: "end" },
})

export const ImgCheff = styled("img", {
	"@xs": { width: "250px" },
	"@md": { width: "300px" },
	"@2xl": { width: "400px" },
})
