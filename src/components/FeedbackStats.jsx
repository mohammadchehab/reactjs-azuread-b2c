import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

  //calculate 
  let avarage = feedback.length === 0 ? 0 :  feedback.reduce((acc, current)=>{
    return acc + current.rating
  }, 0) / feedback.length

  avarage = avarage.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage rating : {avarage}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackStats
