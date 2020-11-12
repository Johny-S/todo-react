import React from 'react';

export const Notes = ({notes}) => {
  return (
    <ul className='list-group'>
      {notes.map(({ title, id }) => (
        <li 
          className='list-group-item note'
          key={id}>
            <div>
              <strong>{title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button
              type="button" 
              class="btn btn-outline-danger btn-sm">
                &times;
            </button>
        </li>
      ))}
    </ul>
  )
}