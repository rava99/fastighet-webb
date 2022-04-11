import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Kalkylator from './Kalkylator';
import Resultat from './Resultat'
import Snitthyror from './Snitthyror.js'
// import { useLocation } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { direktAvkastning: "" }
    this.addDirektAvkastning = direktAvkastning2 => this.setState(state => ({ direktAvkastning: direktAvkastning2 }));
    // this.state = { lista: {}}
  }
  render() {
    return (
      <div class="container">

        <Router >
          <Navbar />
          {this.renderRouter()}
        </Router>
      </div>
    );
  }


  renderRouter() {
    return (
      <Routes>
        <Route path="/" element={<h1> Startsida... </h1>} />
        <Route path="/direkt-avkastning" element={
          <><Kalkylator addDirektAvkastning={this.addDirektAvkastning} />
            <Resultat direktAvkastning={this.state.direktAvkastning} /></>
        } />
        <Route path="/snitt-hyror" element={<Snitthyror />} />




      </Routes>
    );
  }
}


function Navbar() {
  return (

    <html>
      <head>

      </head>
      <body><div class="area"></div><nav class="main-menu">
        <ul>
          <li>
            <a href="/">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">
                Hem
              </span>
            </a>

          </li>
          <li class="has-subnav">
            <a href="direkt-avkastning">
              <i class="fa fa-bar-chart-o fa-2x"></i>
              <span class="nav-text">
                Direktavskastning
              </span>
            </a>

          </li>
          <li class="has-subnav">
            <a href="snitt-hyror">
              <i class="fa fa-map-marker fa-2x"></i>
              <span class="nav-text">
                Snitthyror
              </span>
            </a>

          </li>

        </ul>


      </nav>
      </body>
    </html>
  );
}



export default App;
