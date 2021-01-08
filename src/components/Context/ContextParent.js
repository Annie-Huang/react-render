import React, { useState } from 'react';
import { ChildA } from './ContextChildren';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        <ChildA />
      </CountProvider>
    </>
  );
};

export default ContextParent;
