import React from 'react';
import './style.css';
import Child1 from './Child1';

export default function Child(props) {
  return (
    <div>
      <Child1 data={props.data}/>
    </div>
  );
}
