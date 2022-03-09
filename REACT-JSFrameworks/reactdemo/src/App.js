import './App.css';
import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
import ButtonList from './components/ButtonList';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1 class="heading">Hello</h1>
      <SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonList/>
      <Card/>
    </div>
  );
}

export default App;
