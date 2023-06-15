import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/CadastroUser";
import Livro from "../pages/Livro";
import CadastrarLivros from "../pages/CadastrarLivros";
import EditUsuario from "../pages/EditUsuario";
import EditLivro from "../pages/EditLivro";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/livros" component={Livro} />
      <Route exact path="/cadastrar-livros" component={CadastrarLivros} />
      <Route exact path="/edit-usuario/:id" component={EditUsuario} />{" "}
      <Route exact path="/edit-livro/:id" component={EditLivro} />{" "}
    </Switch>
  );
}
