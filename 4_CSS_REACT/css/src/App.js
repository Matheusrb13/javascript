import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

import {useState} from 'react'

function App() {
const n = 15
const [name] = useState('Matheus')
const redTitle = false

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS de componente*/}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{
        color: 'blue',
        padding: '25px',
        borderTop: '2px solid red'
      }}
      >
        Este elemento foi estilizado de forma inline
        </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color:'purple'}) : ({color:'pink'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:'purple'}) : ({color:'pink'})}>CSS dinâmico</h2>
      <h2 style={name === 'Matheus' ? ({color:'green', backgroundColor: '#000'}) : null} >teste nome</h2>
    {/* Classe dinâmica */}
    <h2 className={redTitle ? 'red-title' : 'title'}>
      Este titulo vai ter classe dinâmica
      </h2>
    {/* CSS Modules */}
    <Title/>
    <h2 className='my-title'> testando </h2>
    </div>
  );
}

export default App;
