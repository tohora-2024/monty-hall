/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom'
import SupriseImage from '../images/goat.png'
import SupriseSound from '../audio/gnome.mp3'
import Door from '../images/Door.png'

export default function Suprise() {
  return (
    <>
      <h1 className="header">GERARD&apos;S FAULT</h1>
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
            <img src={SupriseImage} alt="door2" className="img" />
          </p>
        </Link>
        <Link to="/board">
          <p>
            <img src={Door} alt="door3" className="img" />
          </p>
        </Link>
        <Link to="/justdoit">
          <p>
            <img src={Door} alt="door4" className="img" />
          </p>
        </Link>
      </div>
    </>
  )
}
