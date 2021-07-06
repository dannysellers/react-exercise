import * as React from 'react';

const Textbox = ({
  onChange
}) => {
  return <input
    onChange={onChange}
    style={{
      border: '2px solid black',
      borderRadius: '3px',
      margin: '0.5rem',
      padding: '0.75rem',
      width: 300,
      fontSize: '1.15rem'
    }}
  />;
}

export default Textbox;
