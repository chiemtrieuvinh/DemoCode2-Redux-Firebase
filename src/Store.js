import * as firebase from 'firebase';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
var redux = require('redux')



const titleInitialState = {
    userNote:{
    title: '',
    note: ''
    },
    vinh: 'vinhchiem',
    nested:{
        name:'qweqwe'
    },
    noteList : ['qưeqưe'],
    isEdit: false,
    isEditSubmit: false,
    test: [{id:1,title:1,note:2},{id:2,qưe:3,rửtret:4}],
    idupdate: 0,
    isIncreasement: 0,
    loading : false
}
const title = (state = titleInitialState, action) => {
    switch(action.type)
    {
        case 'LOADING':
        return Object.assign({},state,{
            loading : !state.loading 
        })
        case 'INCREASE':
        console.log(action.val)
            return Object.assign({},state,{
                
                isIncreasement : state.isIncreasement + action.val,
                loading: !state.loading
            })
            case 'DECREASE':
            return Object.assign({},state,{
                isIncreasement : state.isIncreasement - 1
            })   
        case 'ADD_STATE':
            // console.log('ket noi thanh cong' + JSON.stringify(action.getdata))
            var data = firebase.database().ref('dataForNote')
            data.push(state.userNote)
            return {...state}
            
        case 'CHANGE_EDITFORM':
            return {...state, isEdit: !state.isEdit}
        case 'HANDLE_CHANGE':
            return Object.assign({},state,{
                userNote: Object.assign({},state.userNote,{
                    [action.name] : [action.value]
                })
            })
        
        case 'EDIT_FORM':
        // console.log(typeof(action.getid))
        // console.log('ket noi thanh cong'  + action.getid)
        // console.log('gia t ri cua userNote la' + JSON.stringify(state.userNote))
        // console.log(state.userNote)
        // console.log(state.test)
        console.log(state.noteList.find((item)=>{
            
            return item.key === action.getid}))
           return Object.assign({},state,{
               userNote : state.noteList.find((item)=>{
            
                return item.key === action.getid}),
                idupdate: action.getid
           })

        case 'LAY_LIST':
        // console.log(state.test.find((obj)=>obj.id === 1 ))
        // console.log(state.noteList.find((obj)=>obj.key === 'node2' ))
        // console.log(state.noteList.find((item)=>item.key === 'node1'))
        // console.log(action.arraylist)
       return {...state,noteList: action.arraylist}

       case 'UPDATE':
    //    console.log('ket noi thanh cong')
       var data = firebase.database().ref('dataForNote/'+state.idupdate)
       data.set(state.userNote)
      return {...state}

       case 'CHANGE_EDITSUBMIT':
       return {...state, isEditSubmit: !state.isEditSubmit}
  
        case 'DELETE':
        // console.log('ket noi thanh cong')
        // console.log(action.iddelete)
        var data = firebase.database().ref('dataForNote')
        data.child(action.iddelete).remove()
        return {...state}

        default:
                 return state
    }
}

var store1 = redux.createStore(title,applyMiddleware(thunk))

export default store1