import React, { Component } from 'react'

export default class ClassA extends Component {
    constructor(){
        super()
        this.state ={
            message:'Hello World',
            count:0
        }
    }

    componentWillMount(){
        console.log('Component Will mOUNT ')
    }

    componentDidMount(){
        console.log('Component DID Mount')
    }

  componentDidUpdate(){
        console.log('Component did update')
  }

  componentWillUnmount(){
    console.log('Component will unmount')
  }

  render() {
    return (
      <div>
        <h1>Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count+1})} >Increment</button>
      </div>
    )
  }
}
