import { useAuth0 } from "@auth0/auth0-react"
const Profile = () => {
  const {user, isAuthenticated } = useAuth0();
  return (
    <div>
      {
        isAuthenticated &&

        <>
        { JSON.stringify(user) }
        <p>{user.name}</p>
        <p>{user.email}</p>
        </>
      }
    </div>
  )
}
export default Profile