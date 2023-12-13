import Html from '@kitajs/html'

export const Layout = ({ children }: Html.PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Bun Dev - Experiencing with Bun, Elysiajs, Turso, Htmx</title>
        <script src="https://unpkg.com/htmx.org@1.9.6" />
        <script src="https://unpkg.com/hyperscript.org@0.9.11" />
        <link href="/styles.css" rel="stylesheet" />
        <link href="/reset.css" rel="stylesheet" />
        <link href="/global.css" rel="stylesheet" />
        <link href="/tokens/index.css" rel="stylesheet" />
        <link href="/tokens/keyframes.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://unpkg.com/lucide@latest" />
        <script src="/public/js/script.js" />
      </body>
    </html>
  )
}
