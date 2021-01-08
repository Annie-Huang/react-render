import React, { useState, useMemo } from 'react';
import MemoizedChildFive from './ChildFive';

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  // object|function will be recreated again everything ParentFour rerender, so it will cause MemoizedChildFive to rerender
  // as well even though the object|function does not changed.
  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  };
  const memoizedPerson = useMemo(() => person, []);
  // const handleClick = () => {};

  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <MemoizedChildFive name={name} person={memoizedPerson} />
      {/*<MemoizedChildFive name={name} handleClick={handleClick} />*/}
    </div>
  );
};

export default ParentFour;
