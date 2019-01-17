import React, { Component } from 'react';

import './App.css';
import * as firebase from 'firebase';
import { firebaseConnect } from './firebaseConnect.js';
import Nav from'./Nav.js'
import Container from './Container.js'
import {connect} from 'react-redux' 
import * as ActionCreator from './actions.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      node: ''
    }
    this.getData = this.getData.bind(this)
  }
  // connectFB = () =>{
  //   var data = firebase.database().ref('dataForNote')
  //   data.push({
  //     id:4,
  //     title:'ngày 5/10/2018',
  //     note: ' đã thêm được dữ liệu vào db'
  //   })
  // }
  // xoadulieu = (id) =>{
  //   var data = firebase.database().ref('dataForNote')
  // data.child(id).remove()
  // console.log('đã xóa được id là: ' + id)
  // }
  getData(data){
   console.log('getdata da lay duoc gia tri la:' + data.note)
    //  var dataConnect = firebase.database().ref('dataForNote')
    //  dataConnect.push(data)
}  
  

  render() {
           console.log(this.props.isEdit)
          console.log(firebaseConnect)
    return (
      <div className="App">
        <Nav/>
        <Container getdata={(data)=>{this.getData(data)}}/> */}




          {/* <button onClick={()=>this.connectFB()}>ADD NEW VALUE</button>
          <button onClick={()=>this.xoadulieu('-LQ9JYVH7ta7KIn20fng')}>DELETE VALUE</button> */}
      {/* <div>
        <h1>{this.props.isIncreasement}</h1>
          <div>
            <button onClick={()=>this.props.increase()}>increase</button>
            <button onClick={()=>this.props.decrease()}>decrease</button>
            <br></br>
            {this.props.loading ? <img src='https://znews-photo.zadn.vn/w660/Uploaded/rik_rdcvcvwt_wc/2018_11_23/fbae4a4f2020rangeroverevoque61.jpg'/> : ''}
          </div>
      </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEdit: () => {
      dispatch({
        type: 'CHANGE_EDITFORM'
      })
    },
    increase:()=>{
      dispatch(ActionCreator.increase(1))
    },
    decrease:()=>{
      dispatch(ActionCreator.decrease())
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    isIncreasement: state.isIncreasement,
    loading : state.loading
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)