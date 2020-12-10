import React from 'react'

function Statement(props){

console.log(props)
  
    return (
      <h1 style={{ border: "solid", color: "grey", textAlign: "center" }}>{props.statement}</h1>
    )


}



export default Statement