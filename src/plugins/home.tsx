import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Card } from '@/components'
import { Layout } from '@/layouts'
import { css } from '@/styled-system/css'
import { grid } from '@/styled-system/patterns'

export const home = new Elysia().use(html()).get('/', () => {
	const frontend = ['HTMX', 'Alpine.js', 'PandaCSS']
	const cards = [
		{
			url: '/tasks',
			image: '/public/assets/tasks.png',
			text: '#tasks',
		},
		{
			url: '/products',
			image: '/public/assets/products.png',
			text: '#products',
		},
		{
			url: '/news',
			image: '/public/assets/news.png',
			text: '#news',
		},
		{
			url: '/text-to-speech',
			image: '/public/assets/text-to-speech.png',
			text: '#text-to-speech',
		},
	]

	return (
		<Layout>
			<body
				class={css({
					height: '100vh',
					margin: 0,
					bg: 'gray.200',
				})}
			>
				<div class={css({ maxW: '3xl', mx: 'auto', py: 12 })}>
					<h1
						class={css({
							fontSize: '4xl',
							textAlign: 'center',
							fontWeight: '700',
							lineHeight: '1.175',
							md: {
								fontSize: '5xl',
							},
						})}
					>
						Experience with Bun, Elysiajs, Turso and{' '}
						<span class={css({ pos: 'relative', display: 'inline-flex' })}>
							{frontend.slice(0, 1).map((fe) => (
								<span key={fe} safe>
									{fe}
								</span>
							))}
						</span>
					</h1>

					<div class={css({ maxW: '2xl', py: 16, mx: 'auto' })}>
						<div
							class={grid({
								columns: 2,
								gap: 4,
							})}
						>
							{cards.map((card) => (
								<Card card={card} key={card.text} />
							))}
						</div>
					</div>
				</div>
			</body>
		</Layout>
	)
})
