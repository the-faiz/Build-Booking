import React from 'react'
import "./OverviewCard.css"

const OverviewCard = (props) => {
  return (
    <div>
      <div className="overviewcard" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image}) center/cover`
}}>
    <p><b>{props.text}</b></p>

      </div>
    </div>
  )
}

export default OverviewCard
