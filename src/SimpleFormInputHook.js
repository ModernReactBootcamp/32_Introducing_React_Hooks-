import React from 'react';
import UseInputState from './hooks/UseInputState.js';

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = UseInputState('');

  return (
    <div>
      <h1>The value is {email} </h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Submit</button>
    </div>
  );
}
