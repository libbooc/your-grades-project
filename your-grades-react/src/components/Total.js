import React from 'react'

const Total = ({calculateQPI}) => {
  return (
    <div className="qpi">
      <div className="qpi-label">
        <p>Total QPI:</p>
      </div>
      <div className="qpi-value">
        <p>{calculateQPI().toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Total
