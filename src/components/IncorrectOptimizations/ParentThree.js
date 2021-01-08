import React, { useState } from 'react';
import MemoizedChildThree from './ChildThree';

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentThree Render');

  // If the {children} is pure text like: <MemoizedChildThree name={name}>Hello</MemoizedChildThree>
  // When you click on setCount button (1st button), the child will not render.
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <MemoizedChildThree name={name}>Hello</MemoizedChildThree>
    </div>
  );
};

export default ParentThree;
