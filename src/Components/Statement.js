import React from 'react'

class Statement extends React.Component {

  constructor(props) {
    super()

    this.state = ({ props })

  }


  render() {
    console.log(this.state)
    return (
      <h1 style={{ border: "solid", color: "grey", textAlign: "center" }}>{}</h1>
    )

  }

}



export default Statement