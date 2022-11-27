import React from "react"
function QualityIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
			viewBox='0 0 89 120'
			preserveAspectRatio='xMinYMid meet'>
			<g clipPath='url(#clip0_3_324)' fill='#393836'>
				<path d='M82 41.887a41 41 0 10-64.276 33.737L0 106.315l13.214.545 7.075 11.17L40.59 82.864c.14 0 .27.023.41.023.14 0 .27-.018.41-.023l20.3 35.166 7.217-10.93L82 106.315l-17.724-30.69A40.941 40.941 0 0082 41.886zm-70.286 0a29.286 29.286 0 1158.572 0 29.286 29.286 0 01-58.572 0z' />
				<path d='M41 59.459c9.704 0 17.571-7.867 17.571-17.572 0-9.704-7.867-17.571-17.571-17.571s-17.571 7.867-17.571 17.571c0 9.705 7.867 17.572 17.571 17.572z' />
			</g>
		</svg>
	)
}
export default QualityIcon
