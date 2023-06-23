import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components /LoginButton';
import Profile from './components /Profile';
import { LogoutButton } from './components /LogoutButton';
function App() {
  const { loginWithRedirect } = useAuth0();  
  return (
    <>
     <div className='app'>
      <h1>Aplication</h1>

      <LoginButton />
     
      <Profile/>
      <LogoutButton/>
     </div>

    </>
  )
}

export default App
