import React from 'react'

function Props1(props) {
    let x=5
  return (
    <div>{props.name}
    {props.age}
    <h1>{props.submit(x)}submit</h1>
    </div>
  )
}

export default Props1