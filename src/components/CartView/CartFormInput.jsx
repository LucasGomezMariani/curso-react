import React from 'react';

function CartFormInput(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label htmlFor={props.name} style={{ width: "100px", marginRight: 4 }}>
        {props.title}
      </label>
      <input
        required
        value={props.value}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
}

export default CartFormInput;