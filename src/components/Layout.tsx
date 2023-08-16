import * as elements from 'typed-html';

export const Layout = ({ children }: elements.Children) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Books Store</title>
        <script src='https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio' />
        <link rel='stylesheet' href='/public/app.css' />
      </head>
      <body>
        <div>{children}</div>
        <script src='//unpkg.com/alpinejs' defer={'true'} />
        <script src='/public/app.js' />
      </body>
    </html>
  );
};
