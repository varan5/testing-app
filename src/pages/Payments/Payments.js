import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payments = () => {

  const [product, setProduct] = useState({
    name: 'Python Mastery Course',
    price: 19,
    productBy: 'Algomastery'
  })

  const makePayment = (token) => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/api/payments`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log('Response: ', response)
        console.log('Status: ', response.status)
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  return (
    <div>
      <h4>Stripe payment</h4>
      <StripeCheckout
        stripeKey=""
        token={makePayment}
        name="Buy Python Mastery Course"
        amount={product.price * 100}
      />
    </div>
  )
}

export default Payments