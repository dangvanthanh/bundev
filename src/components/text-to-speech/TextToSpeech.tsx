import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'

export const TextToSpeech = () => {
	return (
		<div class={css({ p: 2 })}>
			<form
				hx-post="/convert-text-to-speech"
				hx-target="#speech"
				hx-swap="innerHTML"
			>
				<textarea
					class={css({
						w: 'full',
						p: 2,
						borderWidth: '1px',
						borderColor: 'gray.200',
						minH: 28,
					})}
					placeholder="Enter the text you want to convert to speech"
					maxlength="10000"
					name="speech"
				/>
				<div class={flex({ justify: 'end', mt: 2 })}>
					<button
						type="submit"
						class={css({
							bg: 'violet.600',
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							py: 1.5,
							px: 3,
							color: 'white',
							cursor: 'pointer',
						})}
					>
						Create Speech
					</button>
				</div>
			</form>
			<div id="speech" />
		</div>
	)
}
