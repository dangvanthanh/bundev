import { Card } from '@/components'
import { Layout } from '@/layouts'
import { html } from '@elysiajs/html'
import { css } from '@styled-system/css'
import { grid } from '@styled-system/patterns'
import { Elysia } from 'elysia'

export const home = new Elysia().use(html()).get('/', ({ html }) => {
  const frontend = ['HTMX', 'Alpine.js', 'PandaCSS']
  const cards = [
    { url: '/tasks', image: '/public/assets/tasks.png', text: '#tasks' },
    { url: '/products', image: '/public/assets/products.png', text: '#products' },
    { url: '/news', image: '/public/assets/news.png', text: '#news' },
  ]

  return html(
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
                <span safe>{fe}</span>
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
                <Card card={card} />
              ))}
            </div>
          </div>
        </div>
      </body>
    </Layout>,
  )
})
