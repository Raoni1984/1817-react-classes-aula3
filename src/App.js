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

  criarNovaNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];

    this.setState({ notas: novoArrayNotas });

    console.log(`NOTA FOI CRIADA COM TITULO ${titulo} E CONTEUDO ${texto}`);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });

    console.log("deletada");
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNovaNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          deletarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
