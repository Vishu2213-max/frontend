import React, { useRef } from 'react';
import './App.css';

function FormData() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
    const age=document.getElementById("age").value
    console.log(age)
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Enter your first name</label>
            <input type="text" name="firstName" ref={firstNameRef} defaultValue="vishu"/>

            <label>Enter your last name</label>
            <input type="text" name="lastName" ref={lastNameRef} defaultValue="sharma" />

            <label>Enter your age</label>
            <input type="number" name="age" id="age" min="1" defaultValue="20"/>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormData;