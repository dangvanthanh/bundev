import { Elysia } from 'elysia'

export const styledSystem = new Elysia()
	.get('/styles.css', () => Bun.file('styled-system/styles.css'))
	.get('/reset.css', () => Bun.file('styled-system/reset.css'))
	.get('/global.css', () => Bun.file('styled-system/global.css'))
	.get('/tokens/index.css', () => Bun.file('styled-system/tokens/index.css'))
	.get('/tokens/keyframes.css', () =>
		Bun.file('styled-system/tokens/keyframes.css'),
	)
