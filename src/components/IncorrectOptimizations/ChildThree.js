import React from 'react';

const ChildThree = ({ children, name }) => {
  console.log('ChildThree Render');
  return (
    <div>
      {children} {name}
    </div>
  );
};

const MemoizedChildThree = React.memo(ChildThree);

export default MemoizedChildThree;
