import React from 'react';

export const Alert = ({ alert: { type, text } }) => {
  return (
    <div className={`alert alert-${type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
        {text}
      <button type='button' className='close' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  )
}