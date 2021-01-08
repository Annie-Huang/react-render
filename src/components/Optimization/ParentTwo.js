import React, { useState } from 'react';
import ChildTwo from './ChildTwo';

const ParentTwo = () => {
  const [count, setCount] = useState(0);

  console.log('ParentTwo Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <ChildTwo />
    </div>
  );
};

export default ParentTwo;
