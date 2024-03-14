/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'
import SubmissionForm from './components/SubmissionForm.tsx'
import ThreeDoors from './components/ThreeDoors.tsx'
import PostBoard from './components/PostBoard.tsx'
import Goat from './components/Goat.tsx'
import Sponge from './components/Sponge.tsx'
import Puppies from './components/Puppies.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ThreeDoors />} />
      <Route path="/submit" element={<SubmissionForm />} />
      <Route path="/board" element={<PostBoard />} />
      <Route path="/goat" element={<Goat />} />
      <Route path="/sponge" element={<Sponge />} />
      <Route path="/puppies" element={<Puppies />} />
    </Route>
  )
)

export default router
