import React from 'react'
import yesNo from '../objects'
import Statement from './Statement'


class Image extends React.Component {
constructor(props){
  super()

  this.state = ({ props })

  this.image = () => {
    console.log(props)
    return yesNo.no["no-image"]
  }

  this.statement = () => {
    return <Statement no={yesNo.no["no-statement"]} />

  }


}
  
    

  render() {
    // console.log(this.image)
    return (
      <>
        {this.statement()}
        <img onClick={this.image} alt="sure" />
      </>
    )
  }


}

// toggle = () => {
//   if (this.state === yesNo.no) {
//     return {yesNo[yes]["yes-image"]}
//   }
//   else {
//     return {yesNo.no["no-image"]}
//   }









export default Image