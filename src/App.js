import React, { Component } from "react";
export default class App extends Component {
  state = {
    tarefa: "",
    lista: [],
  };
  recebeInput = (event) => {
    this.setState({ tarefa: event.target.value });
  };
  buttonAdicionar = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random(),
      }),
      tarefa: "",
    });
  };
  buttonApagar = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  render() {
    return (
      <Section>
        <input value={this.state.tarefa} onChange={this.recebeInput} />

        <ul>
          {this.state.lista.map((item) => (
            <li>
              {item.tarefa}
              <button
                onClick={() => {
                  this.buttonApagar(item.id);
                }}
              >
                Apagar
              </button>
            </li>
          ))}
        </ul>
        <button onClick={this.buttonAdicionar}>Adicionar</button>
      </Section>
    );
  }
}
