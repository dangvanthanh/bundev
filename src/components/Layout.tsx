import * as elements from 'typed-html';

export const Layout = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bun Dev</title>
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    <link href="/styles.css" rel="stylesheet">
    <link href="/reset.css" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
    <link href="/tokens/index.css" rel="stylesheet">
    <link href="/tokens/keyframes.css" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <script src="https://unpkg.com/lucide@latest"></script>
  </head>
  <body>
    ${children}
    <script>
      lucide.createIcons();
    </script>
  </body>
</html>
`;
