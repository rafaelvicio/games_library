import React, { Component } from 'react';
import logo from './logo.svg';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {

  constructor() {
    super();
    this.state = {lista : 
      [
        {nome:'alberto', email:'alberto.souza@caelum.com.br',senha:'123456'},
        {nome:'rafael', email:'teste@gmail.com', senha:'123123123123'}
      ]
    };
  }

  render() {
    return (
      <div id="layout">

    <a href="#menu" id="menuLink" className="menu-link">

        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Games</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Plataforms</a></li>


            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1>Game Registers</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha"  />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  {
                    this.state.lista.map(function(autor){
                      return (
                        <tr>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                        );
                      })
                  }
                </table> 
              </div>             
            </div>
          </div>            


</div>    
    );
  }
}

export default App;
