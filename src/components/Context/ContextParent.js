import React, { useState } from 'react';
import { ChildA } from './ContextChildren';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');

  // I thought usually the Context is wrapped in the <App /> level and component that contains the function call to change the value
  // is usually not in the same tree branch from the component that use the value. Otherwise, it can just be passed by parent -> children, rather than using context.
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
