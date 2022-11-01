import React, { useState } from 'react';
import './style.css';
import Child from './Child';

export default function Parent() {
  const [state, setState] = useState('i am from Main Parent component');

  return (
    <div>
      <Child data={state} />
    </div>
  );
}
