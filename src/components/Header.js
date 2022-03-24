import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component that creates the header with the name of the user based on api data
 * 
 *@component
 * @example
  * const name = 'John;
 *  * return (
 *   <Header name={name}/>
 * )
 */

export default function Header(props) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h4>Congratulations! You reached yesterday's goal!</h4>
    </div>
  )
}

Header.propTypes = {
    name: PropTypes.string
};