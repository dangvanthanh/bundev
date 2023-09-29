import { html } from '@elysiajs/html';
import { css } from '@styled-system/css';
import { flex, grid } from '@styled-system/patterns';
import { Elysia } from 'elysia';
import { Layout } from '../components/Layout';

export const home = new Elysia().use(html()).get('/', ({ html }) =>
  html(
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
            Experience with Bun, Elysiajs, Turso and <span>HTMX</span>
          </h1>

          <div class={css({ maxW: '2xl', py: 16, mx: 'auto' })}>
            <div
              class={grid({
                columns: 2,
                gap: 4,
              })}
            >
              <div
                class={css({
                  bg: 'white',
                  rounded: 'md',
                  p: 2,
                })}
              >
                <a href="/tasks" class={flex({ h: 'full', direction: 'column' })}>
                  <img src="/public/assets/tasks.png" alt="" />
                  <h3
                    class={css({
                      mt: 5,
                      color: 'gray.400',
                    })}
                  >
                    #tasks
                  </h3>
                </a>
              </div>
              <div
                class={css({
                  bg: 'white',
                  rounded: 'md',
                  p: 2,
                })}
              >
                <a href="/products" class={flex({ h: 'full', direction: 'column' })}>
                  <img src="/public/assets/tasks.png" alt="" />
                  <h3
                    class={css({
                      mt: 5,
                      color: 'gray.400',
                    })}
                  >
                    #products
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Layout>,
  ),
);
