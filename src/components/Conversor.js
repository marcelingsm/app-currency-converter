import React, { Component } from "react";
import axios from "axios";

class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_value: "",
      moedaB_value: 0
    };

    this.converter = this.converter.bind(this);
  }

  converter = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br/all/${this.props.moedaA}-${this.props.moedaB}`
      );
      this.setState({
        moedaB_value: (this.state.moedaA_value * response.data.USD.low).toFixed(
          2
        )
      });
      console.log(this.state.moedaB_value);
    } catch (erro) {
      console.log(erro);
    }
  };

  render() {
    return (
      <div className="conversor">
        <h1>Conversor de Moedas</h1>
        <h3>
          {this.props.moedaA} para {this.props.moedaB}
        </h3>
        <input
          type="text"
          onChange={event => {
            this.setState({ moedaA_value: event.target.value });
          }}
        />
        <button onClick={this.converter}>Converter</button>
        <h2>Resultado: {this.state.moedaB_value}</h2>
      </div>
    );
  }
}

export default Conversor;
