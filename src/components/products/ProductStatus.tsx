import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { STATUS } from './types'

export const ProductStatus = ({ status }: { status: string }) => {
	return (
		<span
			class={flex({
				align: 'center',
				fontSize: 'xs',
				gap: 1.5,
				bg:
					status === STATUS.DONE
						? 'green.50'
						: status === STATUS.REJECTED
						  ? 'red.50'
						  : status === STATUS.ON_HOLD
							  ? 'gray.50'
							  : 'blue.50',
				px: 1.5,
				py: 0.5,
				rounded: 'xl',
				color:
					status === STATUS.DONE
						? 'green.500'
						: status === STATUS.REJECTED
						  ? 'red.500'
						  : status === STATUS.ON_HOLD
							  ? 'gray.500'
							  : 'blue.500',
			})}
		>
			<span
				class={css({
					w: 1.5,
					h: 1.5,
					rounded: 'full',
					bg:
						status === STATUS.DONE
							? 'green.500'
							: status === STATUS.REJECTED
							  ? 'red.500'
							  : status === STATUS.ON_HOLD
								  ? 'gray.500'
								  : 'blue.500',
				})}
			/>
			<span safe>{status}</span>
		</span>
	)
}
