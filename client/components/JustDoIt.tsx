/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom'
import SupriseImage from '../images/shia.png'
import SupriseSound from '../audio/shia.mp3'
import Door from '../images/Door.png'
import Door2 from '../images/Door2.png'

export default function JustDoIt() {
  return (
    <>
      <h1 className="header">BEN&apos;S FAULT</h1>
      <audio autoPlay>
        <source src={SupriseSound} type="audio/mp3"></source>
      </audio>
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
        <Link to="/">
          <p>
            <img src={SupriseImage} alt="door4" className="img" />
          </p>
        </Link>
      </div>
    </>
  )
}
