import { Breadcrumb, News } from '@/components'
import { NewItemProps } from '@/components/news/types'
import { Layout } from '@/layouts'
import { css } from '@/styled-system/css'
import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'

export const news = new Elysia()
  .use(html())
  .get('/news', ({ html }) =>
    html(
      <Layout>
        <body
          class={css({
            height: '100vh',
            margin: 0,
            bg: 'gray.200',
          })}
        >
          <Breadcrumb text="News" />
          <div class={css({ maxW: 'md', mx: 'auto', py: 12 })}>
            <div
              class={css({
                bg: 'white',
                borderRadius: 'sm',
              })}
            >
              <div hx-get="/fetch-news" hx-swap="innerHTML" hx-trigger="load" />
            </div>
          </div>
        </body>
      </Layout>,
    ),
  )
  .get('/fetch-news', async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=${process.env.NEWS_API_KEY}`,
    )
    const json = await response.json()

    const news: NewItemProps[] = []

    if (json.status === 'ok') {
      for (const s of json.sources.filter((l: NewItemProps) => l.language === 'en').slice(0, 6)) {
        news.push(s)
      }
    }

    return <News news={news} />
  })
