import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';

export function render(url) {
  const helmetContext = {};
  
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  
  console.log('Helmet context keys:', Object.keys(helmetContext));
  console.log('Helmet context:', JSON.stringify(helmetContext, null, 2));
  
  const { helmet } = helmetContext;
  
  // Build the complete head content from helmet
  let headContent = '';
  if (helmet) {
    const title = helmet.title.toString();
    const meta = helmet.meta.toString();
    const link = helmet.link.toString();
    const script = helmet.script.toString();
    headContent = `${title}${meta}${link}${script}`;
  }
  
  return { 
    html,
    head: headContent
  };
}
