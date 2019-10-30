/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import schnitzelPNG from './schnitzel.png';
import schnitzelWEBP from './schnitzel.webp';

const App: React.FC = () => {
  return (
    <div>
      <picture>
        <source srcSet={schnitzelWEBP} type="image/webp" />
        <img
          alt="Schnitzel"
          css={{
            width: '100vw',
            height: '100vh',
            objectFit: 'contain',
            display: 'block'
          }}
          src={schnitzelPNG}
        />
      </picture>
    </div>
  );
};

export default App;
