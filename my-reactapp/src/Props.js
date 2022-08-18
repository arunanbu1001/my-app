import React from 'react'
import Props1 from './Props1'

export default function Props() {
    const submit=(y)=>{
        console.log('child component',y)
    }
  return (
    <div>
        <Props1 name={"arun"} age={20} submit={submit} ></Props1>
    {/* <h1>{y}</h1> */}
    </div>
  )
}
