import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route path="/" component={Home} exact/>
      <Route component={Pagina404}/>
    </Switch>  
  </BrowserRouter>,
  
  document.getElementById('root')
);

