import React from "react"
function InstagramIcon(props: any) {
	return (
		<svg
			height='30'
			width='30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<g clipPath='url(#clip0_1_68)'>
				<path
					d='M5.806 0A5.806 5.806 0 000 5.806v18.388C0 27.4 2.6 30 5.806 30h18.388C27.4 30 30 27.4 30 24.194V5.805C30 2.6 27.4 0 24.194 0H5.805zM15 22.258a7.258 7.258 0 100-14.516 7.258 7.258 0 000 14.516zM26.129 6.29a2.42 2.42 0 11-4.839 0 2.42 2.42 0 014.839 0zM15 20.323a5.323 5.323 0 100-10.646 5.323 5.323 0 000 10.646z'
					fill={props.fill}
					fillRule='evenodd'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_68'>
					<path d='M0 0h30v30H0z' fill='#fff' />
				</clipPath>
			</defs>
		</svg>
	)
}
export default InstagramIcon
