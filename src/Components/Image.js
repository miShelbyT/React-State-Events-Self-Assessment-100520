import React from 'react'
import yesNo from '../objects'
import Statement from './Statement'


class Image extends React.Component {

  
    image = () => {
      return yesNo.no
    }

  render() {
    // console.log(this.image)
    return (
      <>
        <Statement no={yesNo.no["no-statement"]} />
        <img onClick={yesNo.no["yes-statement"]} alt="sure" />
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