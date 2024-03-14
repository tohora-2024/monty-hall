import { Link } from 'react-router-dom'
import SupriseImage from '../images/sponge.png'
import SupriseSound from '../audio/sponge.mp3'
import Door from '../images/Door.png'
import Door2 from '../images/Door2.png'

export default function Sponge() {
  return (
    <>
      <Link to="/">
        <h2>Back</h2>
      </Link>
      <h1 className="header">PUPPIES</h1>
    </>
  )
}
