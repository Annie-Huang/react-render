import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';

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
    </div>
  );
}

export default App;
