import React, { Component } from 'react'

export default class CadastroNome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email:''
        }
    }

    componentDidMount() {
        console.log('inicou')
    }

    render() {
        return (
           <div>
               <h2>{this.state.nome}</h2>
               <input type="text"
                    placeholder="Digite seu nome"
                    value={this.state.nome}
                    onChange={(event) => this.setState({nome: event.target.value})}/>
                <input type="email"
                    placeholder="Digite seu email"
                    value={this.state.email}
                    onChange={(event) => this.setState({email: event.target.value})}/>
           </div> 
        )
    }
}