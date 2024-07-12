import type { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
		},
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				root: path.join(__dirname, "./", "src", "ui", "ui/components"),
			},
		},
		{
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
		  // Inclua a tag GTM no head da página
        id: "GTM-WRPJ7VPV",

        // Para desativar o GTM em ambientes de desenvolvimento
        includeInDevelopment: true,

        // Configurações adicionais para o dataLayer
        defaultDataLayer: { platform: "gatsby" },
      },
    },
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
	],
}

export default config
