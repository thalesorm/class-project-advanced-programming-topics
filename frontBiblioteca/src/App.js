import React from 'react'
import Routes from './routes/Routes';
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <div>
        <Routes />
      </div>
    </UserProvider>
  )
}
export default App;
