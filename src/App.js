import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNovaNota(titulo, nota) {
    const novaNota = { titulo, nota };
    const novoArrayNotas = [...this.state.notas, novaNota];

    this.setState({ notas: novoArrayNotas });

    console.log(`NOTA FOI CRIADA COM TITULO ${titulo} E CONTEUDO ${nota}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNovaNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
