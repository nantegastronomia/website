import { globalCss } from "stitches.config"

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		fontFamily: "$ubuntu",
	},
	a: {
		textDecoration: "none",
	},
	".clientesImg": {
		overflow: "hidden",
		borderRadius: "$full",
		border: "10px solid",
		borderColor: "$yellow200",
		width: "210px",
	},
})
