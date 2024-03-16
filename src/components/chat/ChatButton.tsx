import { css } from '@/styled-system/css'

export const ChatButton = ({ bg, ...rest }: { bg: string }) => {
	return (
		<button
			type="button"
			class={css({
				bg,
				px: '2',
				borderRadius: 'sm',
				w: '8',
				h: '8',
				cursor: 'pointer',
			})}
			{...rest}
		>
			<i
				data-lucide="send-horizontal"
				class={css({ color: 'white', w: '4', h: '4' })}
			/>
		</button>
	)
}
