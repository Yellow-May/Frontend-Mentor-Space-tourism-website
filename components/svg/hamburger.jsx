export default function HamburgerSvg({ w = '24', h = '21', fill = '#D0D6F9' }) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={w} height={h}>
			<g fill={fill} fillRule='evenodd'>
				<path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
			</g>
		</svg>
	);
}
