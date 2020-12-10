import React from 'react'
import yesNo from '../objects'
import Statement from './Statement'


class Image extends React.Component {
constructor(props){
  super()

  this.state = ({ props })

  this.image = () => {
    // console.log(props)
    return this.state
  }

  this.statement = () => {
    return <Statement no={yesNo.no["no-statement"]} />

  }
// toggle = () => {
//   if (this.state === yesNo.no) {
//     return {yesNo[yes]["yes-image"]}
//   }
//   else {
//     return {yesNo.no["no-image"]}
//   }

}
  

  render() {
    console.log(this.state)
    return (
      <>
        {this.statement()}
        <img onClick={this.image} alt="nope" />
      </>
    )
  }

}











export default Image