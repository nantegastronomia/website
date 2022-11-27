import type * as Stitches from "@stitches/react"
import { createStitches } from "@stitches/react"

export const {
	config,
	createTheme,
	css,
	getCssText,
	globalCss,
	styled,
	theme,
} = createStitches({
	theme: {
		fonts: {
			ubuntu: "Ubuntu",
		},
		fontSizes: {
			0: "0.9rem",
			1: "1rem",
			2: "1.5rem",
			3: "2rem",
			4: "2.25rem",
			5: "2.5rem",
			6: "4rem",
		},
		fontWeights: {
			"1": 400,
			"2": 700,
		},
		colors: {
			yellow100: "#fab334",
			yellow200: "#cd7713",
			black100: "#686868",
		},

		radii: {
			none: "0",
			xs: "0.25rem",
			sm: "0.3629032075405121rem",
			md: "0.5978260636329651rem",
			lg: "0.75rem",
			full: "100%",
		},

		space: {
			1: "0.313rem",
			2: "0.625rem",
			3: "0.938rem",
			4: "1.25rem",
			5: "1.563rem",
			6: "1.875rem",
			7: "2.5rem",
			8: "3.125rem",
			9: "3.75rem",
			10: "4.375rem",
		},
		sizes: {
			1: "5px",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "60rem",
		},
	},
	utils: {
		marginX: (value: Stitches.PropertyValue<"margin">) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: Stitches.PropertyValue<"margin">) => ({
			marginTop: value,
			marginBottom: value,
		}),
		paddingX: (value: Stitches.PropertyValue<"padding">) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: Stitches.PropertyValue<"padding">) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
	media: {
		xs: "(min-width: 360px)",
		sm: "(min-width: 430px)",
		md: "(min-width: 768px)",
		lg: "(min-width: 1024px)",
		xl: "(min-width: 1280px)",
		"2xl": "(min-width: 1536px)",
		"4xl": "(min-width: 2560px)",
	},
})
