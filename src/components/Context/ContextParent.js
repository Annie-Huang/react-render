import React, { useState } from 'react';
// import { ChildA } from './ContextChildren';
// import { MemorizeChildA } from './ContextChildren';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');

  // I thought usually the Context is wrapped in the <App /> level and component that contains the function call to change the value
  // is usually not in the same tree branch from the component that use the value. Otherwise, it can just be passed by parent -> children, rather than using context.

  // ChildA need to be memoized in order to prevent ChildA and ChildB to be rerender.
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      {/*<CountProvider value={count}>*/}
      {/*  /!*<ChildA />*!/*/}
      {/*  <MemorizeChildA />*/}
      {/*</CountProvider>*/}

      <CountProvider value={count}>{children}</CountProvider>
    </>
  );
};

export default ContextParent;
