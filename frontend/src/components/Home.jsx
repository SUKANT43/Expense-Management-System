import React from 'react'

function Home(props) {
  const {name}=props
  return (
    <div>
      <h1>I am a home</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Home
