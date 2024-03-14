import { Link } from 'react-router-dom'
import PostBoard from './PostBoard'
import Door2 from '../images/Door2.png'
import Door from '../images/Door.png'

export default function ThreeDoors() {
  return (
    <>
      <h1 className="header">CHOOSE WISELY</h1>
      <div className="container">
        <Link to="/sponge">
          <p>
            <img src={Door} alt="door1" className="img" />
          </p>
        </Link>
        <Link to="/goat">
          <p>
            <img src={Door2} alt="door2" className="img" />
          </p>
        </Link>
        <Link to="/board">
          <p>
            <img src={Door} alt="door3" className="img" />
          </p>
        </Link>
        <Link to="/puppies">
          <p>
            <img src={Door} alt="door4" className="img" />
          </p>
        </Link>
      </div>
    </>
  )
}
