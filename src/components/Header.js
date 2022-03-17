import React from 'react'
import PropTypes from 'prop-types'

/**
 * This function creates the header with the name of the user
 * @param {string} props any name
 * @returns {string} header with user's name
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