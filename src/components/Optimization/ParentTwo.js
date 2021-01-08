import React, { useState } from 'react';
import ChildTwo from './ChildTwo';

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentTwo Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <ChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;