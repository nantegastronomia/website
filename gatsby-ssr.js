import * as React from "react"
import { getCssText } from "./src/stitches.config"

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<style
			id='stitches'
			dangerouslySetInnerHTML={{
				__html: getCssText(),
			}}
		/>,
	])
}
