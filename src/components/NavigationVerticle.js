import React from 'react'
import {ReactComponent as SitIcon} from '../assets/siticon.svg'
import {ReactComponent as SwimIcon} from '../assets/swimicon.svg'
import {ReactComponent as BikeIcon} from '../assets/bikeicon.svg'
import {ReactComponent as WeightIcon} from '../assets/weighticon.svg'

/**
 * Component returning verticle navigation bar
 * 
 * @component
 * returns (
 * <NavigationVerticle />
 * )
 */

export default function NavigationVerticle() {
  return (
    <nav className="navverticle">
        <ul className="navverticle__list">
            <li>
                <SitIcon />
            </li>
            <li>
                <SwimIcon />
            </li>
            <li>
                <BikeIcon />
            </li>
            <li>
                <WeightIcon />
            </li>
        </ul>
        <div className="navverticle__footer">
            <p>Copyright, SportSee 2022</p>
        </div>
    </nav>
  )
}
