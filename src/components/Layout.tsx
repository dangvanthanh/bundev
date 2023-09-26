import * as elements from 'typed-html';

export const Layout = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bun Dev</title>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    <link href="/styles.css" rel="stylesheet" />
    <link href="/reset.css" rel="stylesheet" />
    <link href="/global.css" rel="stylesheet" />
    <link href="/tokens/index.css" rel="stylesheet" />
    <link href="/tokens/keyframes.css" rel="stylesheet" />
  </head>
  <body>
    ${children}
  </body>
</html>
`;
