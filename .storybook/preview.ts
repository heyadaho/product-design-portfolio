import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/global.css';

// Pre-bundled deps expect React in scope (classic JSX); expose globally for preview iframe
if (typeof globalThis !== 'undefined') (globalThis as any).React = React;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
