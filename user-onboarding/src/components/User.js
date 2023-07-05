import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div >
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Password: {details.password}</p>
      <p>Password: {details.password}</p>
      <p>Terms Of Service: {details.termsOFService}</p>  

      
    </div>
  )
}

export default User
