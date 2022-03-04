import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  _handleKeyInput(event) {
    if (event.key === "Enter") {
      const novaCategoria = document.getElementById("novaCategoria").value;
      this.props.adicionarCategoria(novaCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <>
                <li className="lista-categorias_item" key={index}>
                  {categoria}
                </li>
              </>
            );
          })}
        </ul>
        <input
          id="novaCategoria"
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleKeyInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;
