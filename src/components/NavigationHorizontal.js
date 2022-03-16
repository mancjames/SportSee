import React from 'react'
import { ReactComponent as Logo} from '../assets/logo.svg'

export default function NavigationHorizontal() {
  return (
    <nav className="navhorizontal">
         <Logo />
        <ul className="navhorizontal__list">
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Community</li>
        </ul>
    </nav>
  )
}
