import React, { Component } from 'react'

class CompClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valor: 0
        }
    }

    increment = () => {
        this.setState({valor: this.state.valor + 1}, ()=> {
            console.log('depois')
        })
        
    }

    decrement = () => {
        if (this.state.valor > 0) {
            this.setState({valor: this.state.valor -1})
        } else {
            return
        }
    }

    render() {
        return (
            <>
            <h2>{this.state.valor}</h2>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

export default CompClass