import React from "react"
function FacebookIcon(props: any) {
	return (
		<svg
			height='30'
			width='30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<g clipPath='url(#clip0_1_35)'>
				<path
					d='M5.478 0A5.466 5.466 0 000 5.478v19.044A5.466 5.466 0 005.478 30H15.8V18.272h-3.102v-4.223H15.8v-3.607c0-2.834 1.832-5.437 6.053-5.437 1.71 0 2.973.164 2.973.164l-.1 3.944S23.439 9.1 22.032 9.1c-1.522 0-1.766.702-1.766 1.866v3.083h4.582l-.2 4.223h-4.382V30h4.257A5.466 5.466 0 0030 24.522V5.478A5.466 5.466 0 0024.522 0H5.478z'
					fill={props.fill}
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_35'>
					<path d='M0 0h30v30H0z' fill='#fff' />
				</clipPath>
			</defs>
		</svg>
	)
}
export default FacebookIcon
