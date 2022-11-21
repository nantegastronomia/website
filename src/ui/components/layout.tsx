import "@fontsource/ubuntu/400.css"
import "@fontsource/ubuntu/700.css"
import React from "react"
import { globalStyles } from "../../ui/globalCss"
import Navbar from "./navbar"
export default function Layout({ children }: any) {
	globalStyles()
	return (
		<>
			<Navbar />

			<main>{children}</main>
		</>
	)
}
