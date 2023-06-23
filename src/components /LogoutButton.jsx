import { useAuth0 } from "@auth0/auth0-react"
export const LogoutButton = () => {
    const { logout } = useAuth0()
    return (
    <div>
        <button onClick={() => logout()}>Log out</button>
    </div>
  )
}