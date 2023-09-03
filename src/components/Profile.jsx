import { useSelector } from "react-redux"
import { logout } from "../features/user";
import { useDispatch } from "react-redux"

function Profile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h1>Profile</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => 
          {dispatch(
            logout()
          )
        }}>Logout</button>
    </div>
  )
}

export default Profile