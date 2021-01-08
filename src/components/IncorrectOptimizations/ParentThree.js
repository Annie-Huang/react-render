import React, { useState } from 'react';
import MemoizedChildThree from './ChildThree';

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentThree Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <MemoizedChildThree name={name} />
    </div>
  );
};

export default ParentThree;