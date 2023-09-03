import Profile from "./components/Profile"
import Form from "./components/Form"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
      { 
        user.name === "" || user.age === 0 || user.email === "" ? <Form /> : <Profile />
      }
    </div>
  )
}

export default App
