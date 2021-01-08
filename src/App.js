import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';
// import ParentOne from './components/Optimization/ParentOne';
// import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';

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
      <br />
      {/*<ParentOne>*/}
      {/*  <ChildOne />*/}
      {/*</ParentOne>*/}
      <br />
      <GrandParent />
    </div>
  );
}

export default App;
