import "@fontsource/ubuntu/400.css"
import "@fontsource/ubuntu/700.css"
import React from "react"
import { globalStyles } from "../../ui/globalCss"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ children }: any) {
	globalStyles()
	return (
		<>
			<h1 style={{ fontSize: 0 }}>Nantê Gastronomia</h1>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}
