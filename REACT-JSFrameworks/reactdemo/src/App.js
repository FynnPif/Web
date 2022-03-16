import './App.css';
import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import Vote from './components/Vote';
import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
import ButtonList from './components/ButtonList';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      
      <Counter/>
      <CounterFunc/>

      {/*<h1 class="heading">Hello</h1>
      <SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonList/>
      <Card/>
      <div class="container">
        <Vote candidate="Sepp" address="Dornbirn"/>
        <Vote candidate="Paul" address="Bregenz"/>
        <Vote candidate="Hans" address="Feldkirch"/>
  </div>*/}
    </div>
  );
}

export default App;

