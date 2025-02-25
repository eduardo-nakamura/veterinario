import React from 'react';
import ReactDOMServer from 'react-dom/server';

export { render };

async function render({ Page, contextProps }) {
  const pageHtml = ReactDOMServer.renderToString(<Page {...contextProps} />);
  return {
    documentHtml: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Meu App</title>
        </head>
        <body>
          <div id="root">${pageHtml}</div>
        </body>
      </html>`,
  };
}