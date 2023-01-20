import React from 'react'

/**TODO:
 * 1. save the data in the state
 * 2. Create card component to display the data
 * 3. Create dropdown component to filter the data by caterogies
 * 4. Create search component to filter the data by user input
 * - create filter function(Primary category: Movies, Actors, Directors, by dropdown)
 *  -- filter function should take into account if movies are selected then only show movies with the actor/director specified by the user
 */

/**
 *
 * @param {*} data
 * @returns
 */

const AutoComplete = ({ actors }) => {
  return (
    <div>
      AutoComplete:
      <i>
        {actors.map(el =>
          el.name === 'Arnold Schwarzenegger' ? JSON.stringify(el) : null
        )}
      </i>
      <p>
        CHECKING ARNOLD:
        {JSON.stringify(
          actors.filter(el => el.name === 'Arnold Schwarzenegger')[0]
        )}
      </p>
    </div>
  )
}

export default AutoComplete
