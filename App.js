import React from 'react';
import Navigator from './src/navigator/navigation';
import {Context} from './src/screens/context';
export default function App() {
  return (
    <Context>
      <Navigator />
    </Context>
  );
}
