import { flex } from '@/styled-system/patterns'
import type { NewItemProps } from './types'

export const NewItem = ({ item }: { item: NewItemProps }) => {
	return (
		<div>
			<a
				href={item.url}
				class={flex({
					h: 'full',
					direction: 'column',
					py: 1.5,
					color: 'violet.800',
					lineClamp: 1,
				})}
				target="_blank"
				rel="noopener noreferrer"
				safe
			>
				{item.name} - {item.description}
			</a>
		</div>
	)
}
