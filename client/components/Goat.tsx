/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom'
import GoatImage from '../images/goat.png'
import GnomeSound from '../audio/gnome.mp3'
import Door from '../images/Door.png'

export default function Goat() {
  return (
    <>
      <h1 className="header">GERARD&apos;S FAULT</h1>
      <audio autoPlay>
        <source src={GnomeSound} type="audio/mp3"></source>
      </audio>
      <div className="container">
        <Link to="/submit">
          <p>
            <img src={Door} alt="door1" className="img" />
          </p>
        </Link>
        <Link to="/goat">
          <p>
            <img src={GoatImage} alt="goat" className="goat" />
          </p>
        </Link>
        <Link to="/board">
          <p>
            <img src={Door} alt="door3" className="img" />
          </p>
        </Link>
      </div>
    </>
  )
}
