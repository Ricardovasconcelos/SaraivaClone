import React, { Component } from 'react';

import Main from './pages/Main'
import Header from './components/Header/Header';
import CarouselComponent from './components/Carousel/CarouselComponent'
import MostBought from './components/MostBought/MostBought';
import MoreRead from './components/MoreRead/MoreRead';

import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
       <Header/>
       <CarouselComponent/>
       <MostBought/>
        <MoreRead/>
      </div>
    )
  }
}
export default App
