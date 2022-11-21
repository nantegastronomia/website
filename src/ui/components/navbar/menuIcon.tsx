import React from "react"
function MenuIcon(props: any) {
	return (
		<svg
			height='20'
			width='30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<g clipPath='url(#clip0_25_2)'>
				<path
					d='M1.667 20h26.666C29.25 20 30 19.25 30 18.333c0-.916-.75-1.666-1.667-1.666H1.667c-.917 0-1.667.75-1.667 1.666C0 19.25.75 20 1.667 20zm0-8.333h26.666c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667H1.667C.75 8.333 0 9.083 0 10s.75 1.667 1.667 1.667zM0 1.667c0 .916.75 1.666 1.667 1.666h26.666c.917 0 1.667-.75 1.667-1.666C30 .75 29.25 0 28.333 0H1.667C.75 0 0 .75 0 1.667z'
					fill='#686868'
				/>
			</g>
			<defs>
				<clipPath id='clip0_25_2'>
					<path d='M0 0h30v20H0z' fill='#fff' />
				</clipPath>
			</defs>
		</svg>
	)
}
export default MenuIcon
