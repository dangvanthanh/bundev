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
	.post('/convert-text-to-speech', async ({ body }) => {
		try {
			const fileSpeech = 'public/audio/speech.mp3'
			const mp3 = await openai.audio.speech.create({
				model: 'tts-1',
				voice: 'onyx',
				input: body?.speech,
			})

			const buffer = Buffer.from(await mp3.arrayBuffer())
			await fs.promises.writeFile(fileSpeech, buffer)

			return (
				<div class={css({ mt: 2 })}>
					<audio
						src={`/${fileSpeech}`}
						class={css({ w: '100%' })}
						controls="true"
					>
						<track kind="captions" />
					</audio>
				</div>
			)
		} catch {
			return <div>Something wrong...</div>
		}
	})
