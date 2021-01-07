import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';

function App() {
  return (
    <div className='App'>
      UseState
      <UseState />
      <hr />
      UseReducer
      <UseReducer />
      <hr />
      ImmutableState - ObjectUseState
      <ObjectUseState />
      <hr />
      ImmutableState - ArrayUseState
      <ArrayUseState />
      <hr />
      ParentChild
      <Parent />
      <hr />
      Optimization
      {/*<ParentOne />*/}
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
