import { useState } from "react"
import { login } from "../features/user";
import { useDispatch } from "react-redux"

function Form() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e) => {
            setName(e.target.value)
        }}/>
        <label htmlFor="age">Age</label>
        <input type="number"  onChange={(e) => {
            setAge(e.target.value)
        }}/>
        <label htmlFor="email">Email</label>
        <input type="email"  onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <button onClick={() => 
            {dispatch(
                login({ name: name, age: age, email: email })
            ) 
        }}>Login</button>
    </div>
  )
}

export default Form