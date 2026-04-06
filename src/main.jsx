import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { bwmap, worldmap, huzaifa } from './assets'

const preloadAsset = (href, as, type) => {
  if (!href) return;

  const existing = document.querySelector(`link[rel="preload"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Preload above-the-fold essentials only.
preloadAsset(huzaifa, 'image', 'image/webp');
preloadAsset(bwmap, 'image', 'image/webp');
preloadAsset(worldmap, 'image', 'image/webp');
preloadAsset(new URL('./fonts/mova.otf', import.meta.url).href, 'font', 'font/otf');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
