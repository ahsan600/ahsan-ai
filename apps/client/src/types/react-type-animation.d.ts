// src/types/react-type-animation.d.ts
declare module 'react-type-animation' {
	import { ReactElement } from 'react'

	interface TypeAnimationProps {
		sequence: Array<string | number>
		wrapper?: string
		repeat?: number
		speed?: number
		deletionSpeed?: number
		className?: string
		style?: React.CSSProperties
		cursor?: boolean
	}

	const TypeAnimation: (props: TypeAnimationProps) => ReactElement
	export { TypeAnimation }
}
