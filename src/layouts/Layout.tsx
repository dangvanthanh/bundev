import type { PropsWithChildren } from '@kitajs/html'

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>Bun Dev - Experiencing with Bun, Elysiajs, Turso, Htmx</title>
				<script src="https://unpkg.com/htmx.org@2.0.2" />
				<script src="https://unpkg.com/hyperscript.org@0.9.12" />
				<link href="/styles.css" rel="stylesheet" />
			</head>
			<body>
				{children}
				<script src="https://unpkg.com/lucide@latest" />
				<script src="/public/js/script.js" />
			</body>
		</html>
	)
}
