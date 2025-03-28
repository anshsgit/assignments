import React from 'react'

const Header = (props) => {

  const style = {backgroundColor: 'rgb(196, 164, 132, 0.75)', padding: '20px', marginBottom: '25px'}
  return (
    <div>
      <h2 style={style}>{props.message}</h2>
    </div>
  )
}

export default Header