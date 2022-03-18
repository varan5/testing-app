import React from 'react'
import FAQ from '../../components/FAQ/FAQ'
import Reviews from '../../components/Reviews/Reviews'
import './Features.css'

const Features = () => {
  return (
    <div>
      <div className="reviews-container-div">
        <Reviews />
      </div>
      <div style={{ marginBottom: '50px'}}></div>
    <div>
      <FAQ />
    </div>
    </div>
  )
}

export default Features