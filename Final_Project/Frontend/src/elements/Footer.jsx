import React from 'react'

const Footer = () => {
  return (
    <div style={style}>
      <p>Copyright &copy; Mithoo. All rights reserved.</p>
    </div>
  )
}

const style={
    display : 'flex',
    justifyContent : "center",
    alignItems : 'center',
    backgroundColor : 'black',
    color : "white",
    padding : '5px',
}

export default Footer
