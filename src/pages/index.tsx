import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { styled } from "../../stitches.config"
import Layout from "../ui/components/layout"

export const Head: HeadFC = () => <title>Teste</title>

const Teste = styled("h1", {
	color: "red",
})

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Layout>
				<Teste>pagina</Teste>
			</Layout>
		</>
	)
}

export default IndexPage
