import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import Hero from "../ui/components/hero"
import Layout from "../ui/components/layout"

export const Head: HeadFC = () => <title>Teste</title>

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Layout>
				<Hero />
			</Layout>
		</>
	)
}

export default IndexPage
