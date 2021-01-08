import React, { useState, useMemo, useCallback } from 'react';
import MemoizedChildFive from './ChildFive';

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  // object|function will be recreated again everything ParentFour rerender, so it will cause MemoizedChildFive to rerender
  // as well even though the object|function does not changed.
  // You will need to use useMemo on the object and useCallback on the function to overcome this.

  /*  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  };
  const memoizedPerson = useMemo(() => person, []);*/
  const handleClick = () => {};
  const memoizedHandleClick = useCallback(() => handleClick, []);

  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>

      {/*<MemoizedChildFive name={name} person={person} />*/}
      {/*<MemoizedChildFive name={name} person={memoizedPerson} />*/}

      {/*<MemoizedChildFive name={name} handleClick={handleClick} />*/}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};

export default ParentFour;
