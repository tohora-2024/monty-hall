import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Welcome to Monty Hall</h1>
      <Outlet />
    </>
  )
}

export default App
