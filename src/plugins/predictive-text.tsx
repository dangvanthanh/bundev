import { Breadcrumb, PredictiveText } from '@/components'
import { Layout } from '@/layouts'
import { css } from '@/styled-system/css'
import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'

export const predictiveText = new Elysia()
	.use(html())
	.get('/predictive-text', ({ html }) =>
		html(
			<Layout>
				<body
					class={css({
						height: '100vh',
						margin: 0,
						bg: 'gray.200',
					})}
				>
					<Breadcrumb text="Predictive Text" />
					<div class={css({ maxW: 'md', mx: 'auto', py: 12 })}>
						<div
							class={css({
								bg: 'white',
								borderRadius: 'sm',
							})}
						>
							<PredictiveText />
						</div>
					</div>
				</body>
			</Layout>,
		),
	)
	.get('predictive-text-suggestions', () => {
		return 'New suggestions'
	})
