import fs from 'node:fs'
import { Breadcrumb, TextToSpeech } from '@/components'
import { Layout } from '@/layouts'
import { css } from '@/styled-system/css'
import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export const textToSpeech = new Elysia()
	.use(html())
	.get('/text-to-speech', () => (
		<Layout>
			<body
				class={css({
					height: '100vh',
					margin: 0,
					bg: 'gray.200',
				})}
			>
				<Breadcrumb text="Text To Speech" />
				<div class={css({ maxW: 'md', mx: 'auto', py: 12 })}>
					<div
						class={css({
							bg: 'white',
							borderRadius: 'sm',
						})}
					>
						<TextToSpeech />
					</div>
				</div>
			</body>
		</Layout>
	))
	.post('/convert-text-to-speech', async () => {
		try {
			// const mp3 = openai.audio.speech.create({
			// 	model: 'tts-1',
			// 	voice: 'alloy',
			// 	input: 'Today is a wonderfull day to build something people love!',
			// })

			// const buffer = Buffer.from(await mp3.arryBuffer())
			// await fs.promises.writeFile('test.mp3', buffer)

			return (
				<div class={css({ mt: 2 })}>
					<audio class={css({ w: '100%' })} controls="true">
						<track kind="captions" />
					</audio>
				</div>
			)
		} catch {
			return <div>Something wrong...</div>
		}
	})
