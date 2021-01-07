import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';

function App() {
  return (
    <div className='App'>
      <UseState />
      <hr />
      <UseReducer />
      <hr />
      <ObjectUseState />
      <hr />
      <ArrayUseState />
      <hr />
      <Parent />
    </div>
  );
}

export default App;
