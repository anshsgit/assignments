import React from 'react'
import AppBar from './AppBar.jsx'

const Home = () => {
  return (
    <main>
        <h2>Welcome to the Auth System Demo</h2>
        <p>The demo showcases two approaches to managing authentication state in react:</p>
        <ul>
          <li>State Lifting</li>
          <li>Context API</li>
        </ul>
        <p>Use the toggle above to switch between the two approaches.</p>
    </main>
  )
}

export default Home