import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import Cheff from "ui/components/cheff"
import Clientes from "ui/components/clientes"
import Pilares from "ui/components/pilares"
import Layout from "../ui/components/layout"

export const Head: HeadFC = () => <title>Nantê Gastronomia</title>

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			{/* <Hero /> */}
			<Cheff />
			<Clientes />
			<Pilares />
		</Layout>
	)
}

export default IndexPage
