import React from 'react'
import "./BenefitCard.css"

const BenefitCard = (props) => {
  return (
    <div className='bcard'>
    <div className='benefitcard'>
      <img src={props.url} alt="" />
    </div>
    <p>{props.text}</p>
    </div>
  )
}

export default BenefitCard
