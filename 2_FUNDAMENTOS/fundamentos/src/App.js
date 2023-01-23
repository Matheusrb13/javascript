//components
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';
import MyComponents from './components/MyComponents';
import TemplateExpressions from './components/TemplateExpressions';
// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
      <Events/>
    </div>
  );
}

export default App;
