import React, {Component} from 'react';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  // add1(){
  //     this.props.onAdd1()
  // }
  // add2(){
  //   this.props.onAdd2()
  // }
  // add3(){
  //   this.props.onAdd3()
  // }
  // add4(){
  //   this.props.onAdd4()
  // }
  render(){
    return (
      <div className="App">
          <div>
              你点击了<span id="value">
                {/* //{this.props.value} */}
                {this.props.n}
              </span>次
            <div>
              {/* <button id="add1" onClick={() => this.add1()}>+1</button>
              <button id="add2" onClick={() => this.add2()}>+2</button>
              <button id="minus1" >-1</button>
              <button id="add1IfOdd" onClick={() => this.add3()}>如果是单数就+1</button>
              <button id="add1AfterSec" onClick={() => this.add4()}>2秒钟后+1</button> */}
              <button id="add1" onClick={()=> this.props.add1()}>+1</button>
            </div>
          </div>
      </div>
    )
  }
  
}
function mapStateToProps(state){
  return {
    n: state.n
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add1: ()=> dispatch({type:'add', payload: 1})
  }
}


// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);
