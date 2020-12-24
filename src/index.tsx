import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'ja':
      return import('./compiled-lang/ja.json');
    default:
      return import('./compiled-lang/en.json');
  }
}

const locale = 'ja'

const messages = loadLocaleData(locale)

ReactDOM.render(
  <React.StrictMode>
    <App locale={locale} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);
