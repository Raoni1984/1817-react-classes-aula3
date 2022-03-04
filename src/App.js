import React, { Component } from "react";
import ListaCategorias from "./components/ListaCategorias";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Faculdade", "Lazer"],
    };
  }

  adicionarCategoria(categoria) {
    const novoArrayCategorias = [...this.state.categorias, categoria];
    this.setState({ categorias: novoArrayCategorias });
  }

  criarNovaNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];

    this.setState({ notas: novoArrayNotas });
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
        <main className="conteudo-principal">
          <ListaCategorias
            className="conteudo-principal"
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
