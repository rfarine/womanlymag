import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import { GoogleFont } from 'react-typography';
import CodePlugin from 'typography-plugin-code';

const options = {
  googleFonts: [
    {
      name: 'Yantramanav',
      styles: [
        '100',
        '300',
        '400',
        '500',
        '700',
        '900',
      ]
    }
  ],
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Yantramanav', 'sans-serif'],
  baseFontSize: '16px',
  baseLineHeight: 1.65,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();

  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOMServer.renderToStaticMarkup(
      <GoogleFont typography={typography} />
    );
    const head = document.getElementsByTagName('head')[0];

    head.insertAdjacentHTML('beforeend', googleFonts);
  }
}

export default typography;
