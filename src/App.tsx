import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/home/Home';
import { PageLayout } from './components/echarts/echarts';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <PageLayout/>
    </div>
  );
}

export default App;
