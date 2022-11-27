import React from "react"
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
			viewBox='0 0 89 89'
			preserveAspectRatio='xMinYMid meet'>
			<g clipPath='url(#clip0_56_4)'>
				<path
					d='M41.03.585a8.265 8.265 0 0111.294 7.173L18.843 21.014a12.397 12.397 0 00-7.824 11.526v33.09A8.264 8.264 0 010 57.834V26.198a13.774 13.774 0 018.705-12.81L41.029.586zm16.528 11.019a8.263 8.263 0 0111.306 7.686v.567L40.02 31.284a11.02 11.02 0 00-6.964 10.248v32.94L27.84 76.54a8.264 8.264 0 01-11.311-7.68V35.344a11.018 11.018 0 016.964-10.247l34.065-13.488v-.005zm30.594 18.7v36.494a8.264 8.264 0 01-5.223 7.68L49.872 87.575a8.265 8.265 0 01-11.305-7.686v-36.49a8.264 8.264 0 015.223-7.685l33.057-13.091a8.264 8.264 0 0111.305 7.68z'
					fill='#393836'
				/>
			</g>
			<defs>
				<clipPath id='clip0_56_4'>
					<path d='M0 0h88.152v89H0z' fill='#fff' />
				</clipPath>
			</defs>
		</svg>
	)
}
export default SvgComponent
