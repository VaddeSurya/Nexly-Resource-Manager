import register from '@babel/register';

register({
  extensions: ['.js', '.jsx'],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

import './App.jsx';
