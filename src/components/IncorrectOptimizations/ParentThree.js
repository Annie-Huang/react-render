import React, { useState } from 'react';
// import MemoizedChildThree from './ChildThree';
import MemoizedChildFour from './ChildFour';

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentThree Render');

  /* If the {children} is pure text like: <MemoizedChildThree name={name}>Hello</MemoizedChildThree>
     When you click on setCount button (1st button), the child will NOT render.

     If the {children} is not pure text like:
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
     When you click on setCount button (1st button), the child will render.

     Conclusion: if you have children in your component, no point to wrap your component into React.Memo
   */
  /*
     As for <MemoizedChildFour name={name} /> you can tell it's incorrect because
     the intention is probably when count is clicked, update the time stamp showing as well.
   */
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      {/*<MemoizedChildThree name={name}>Hello</MemoizedChildThree>*/}

      {/*<MemoizedChildThree name={name}>*/}
      {/*  <strong>Hello</strong>*/}
      {/*</MemoizedChildThree>*/}

      <MemoizedChildFour name={name} />
    </div>
  );
};

export default ParentThree;
