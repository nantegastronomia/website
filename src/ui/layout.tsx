import React from "react"
import { styled } from "stitches.config"
const Teste = styled("h1", {
	color: "green",
})

export default function Layout({ children }: any) {
	return (
		<>
			<Teste>layout</Teste>
			{children}
		</>
	)
}
