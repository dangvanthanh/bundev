import { Breadcrumb } from '@/components';
import { Layout } from '@/layouts';
import { html } from '@elysiajs/html';
import { css } from '@styled-system/css';
import { Elysia, t } from 'elysia';

export const products = new Elysia().use(html()).get('/products', ({ html }) =>
  html(
    <Layout>
      <body
        class={css({
          height: '100vh',
          margin: 0,
          bg: 'gray.200',
        })}
      >
        <Breadcrumb text="Products" />
        <div class={css({ maxW: 'md', mx: 'auto', py: 12 })}>
          <div
            class={css({
              bg: 'white',
              borderRadius: 'sm',
              px: 2,
              py: 24,
              textAlign: 'center'
            })}
          >
            <h3>Coming soon...</h3>
          </div>
        </div>
      </body>
    </Layout>,
  ),
);
