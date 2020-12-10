import React from 'react'
import { yes, no } from '../objects'
import Statement from './Statement'


class Image extends React.Component {


  state = {
    image: no["no-image"],
    statement: no["no-statement"]
  }


  toggle = () => {
    if (this.state.image === no["no-image"]) {
      this.setState({image: yes["yes-image"]}) 
      this.setState({statement: yes["yes-statement"]})
    }
    else {
      this.setState({image: no["no-image"]})
      this.setState({statement: no["no-statement"]})
    }
  }


    render() {
      return (
        <>
          <Statement statement={this.state.statement} key={this.state.statement} />
          <img onClick={this.toggle} src={this.state.image} alt="nope" />
        </>
      )
    }

  }











  export default Image