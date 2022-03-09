import './App.css';
import Vote from './components/Vote';
{/*import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
import ButtonList from './components/ButtonList';
import Card from './components/Card';*/}

function App() {
  return (
    <div className="App">
      <h1 class="heading">Hello</h1>
      {/*<SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonList/>
      <Card/>*/}
      <Vote candidate="Sepp" address="Dornbirn"/>
      <Vote candidate="Paul" address="Bregenz"/>
      <Vote candidate="Hans" address="Feldkirch"/>
    </div>
  );
}

export default App;
