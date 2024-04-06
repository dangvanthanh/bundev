import { Elysia } from 'elysia'

export const styledSystem = new Elysia().get('/styles.css', () =>
	Bun.file('styled-system/styles.css'),
)
