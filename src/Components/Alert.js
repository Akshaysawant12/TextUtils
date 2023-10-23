import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className="alert alert-warning" role="alert">
     <a href="/" className="alert-link"> {props.alert.type}</a>:{props.alert.msg}
  </div>
  )
}

export default Alert
