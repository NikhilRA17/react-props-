import React from 'react';
import './style.css';
import Child2 from './Child2';

export default function Child1(props) {
  return (
    <div>
      <Child2 data={props.data}/>
    </div>
  );
}
