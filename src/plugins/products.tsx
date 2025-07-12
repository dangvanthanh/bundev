import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Breadcrumb, ProductList } from '@/components'
import { Layout } from '@/layouts'
import { css } from '@/styled-system/css'

export const products = new Elysia().use(html()).get('/products', () => (
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
					})}
				>
					<ProductList />
				</div>
			</div>
		</body>
	</Layout>
))
