/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([<Route path="/" element={<App />} />])
)

export default router
