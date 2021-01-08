import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';
// import ParentOne from './components/Optimization/ParentOne';
// import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';
import ParentThree from './components/IncorrectOptimizations/ParentThree';

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
      Optimization - GrandParent|ParentOne|ChildOne
      {/*<ParentOne />*/}
      <br />
      {/*<ParentOne>*/}
      {/*  <ChildOne />*/}
      {/*</ParentOne>*/}
      <br />
      <GrandParent />
      <hr />
      Optimization - ParentTwo|ChildTwo
      <ParentTwo />
      <hr />
      Incorrect Optimization - Child component is not simple text | Child
      component is impure component (got new Date() or ramdon())
      <ParentThree />
    </div>
  );
}

export default App;
