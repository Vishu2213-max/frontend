import { useState } from 'react'
import './App.css'
import FormData from './form'
function App() {
  const [firstName, setname] = useState("aditya")
  const [lastName, setlastName] = useState("gondi")
  const [age, setage] = useState(25)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName)
    console.log(lastName)
    console.log(age)
  }

  const changeFirstName = (e) => {
    setname(e.target.value)
  }

  const changeLastName = (e) => {
    setlastName(e.target.value)
  }

  const changeAge = (e) => {
    setage(e.target.value)
  }
  return (
    <>
      <div >
        <div>
          <form onSubmit={handleSubmit}>
            <label>Enter your first name</label>
            <input type="text" name="firstName" value={firstName} onChange={changeFirstName} />

            <label>Enter your last name</label>
            <input type="text" name="lastName" value={lastName} onChange={changeLastName} />

            <label>Enter your email</label>
            <input type="number" name="age" value={age} onChange={changeAge} min="1"/>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div><br></br>
      <FormData/>
    </>
  )
}

export default App
