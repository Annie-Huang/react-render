import React from 'react';

const ChildThree = () => {
  console.log('ChildThree Render');
  return <div>Child component</div>;
};

const MemoizedChildThree = React.memo(ChildThree);

export default MemoizedChildThree;
