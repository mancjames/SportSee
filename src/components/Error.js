import React from 'react'
import { Link } from 'react-router-dom';

  /**
 * Component displaying Error page
 *
 * @component
 * @example
 * return (
 *   <Error />
 * )
 */

export default function Error() {
  return (
    <div className="error">
        <h1 className="error__header">Sorry</h1>
        <h2 className="error__paragraph">We couldn't find that page</h2>
        <h2 className="error__paragraph">Please select from one of the users below:</h2>
        <Link to={`/user/12`}>User 12</Link>
        <br></br>
        <Link to={`/user/18`}>User 18</Link>
    </div>
  )
}
