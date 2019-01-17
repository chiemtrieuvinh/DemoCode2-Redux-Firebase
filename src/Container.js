import React, { Component } from 'react';
import {connect} from 'react-redux' 
import * as firebase from 'firebase';
import { firebaseConnect } from './firebaseConnect.js';
import NoteItem from './NoteItem';
class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            listtest: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
       this.getItem = this.getItem.bind(this)
    }
    componentWillMount(){
        var data = firebase.database().ref('dataForNote')
        data.on('value', (notes)=>{
            var listget = []
            notes.forEach(element => {
                const key = element.key
                const title = element.val().title
                const note = element.val().note
                listget.push({
                    key: key,
                    title: title,
                    note: note
                })
               
            });
            
          
             this.setState({
                 listtest: listget
             })
          
        })
       
    }
    getItem = ()=>{
       
      if(this.state.listtest){
         return this.state.listtest.map((value,key)=>{
            return <NoteItem key={key} id={value.key} title={value.title} note={value.note} arraylist={this.state.listtest}/>
        })
      }
       
    }
    
    handleChange(event){
        this.setState({
            userNote : Object.assign({},this.state.userNote,{
                [event.target.name] : event.target.value
            })
         
        })
      
    }
    handleSubmitForm(event){
        const note = {
            note: this.state.userNote.note,
            title: this.state.userNote.title
        }

        event.preventDefault()
        this.setState({
            userNote:{
                title: '',
                note: ''}
        })
      
       this.props.handleAdd(note)
      }
    handleNoteForm(){
        if(this.props.isEdit === true){
            return (  <form onSubmit={(event)=>{
                event.preventDefault()
                this.props.handleAdd()}}>
                Title: {''}<input type="text" name="title" id="title" className="form-control" placeholder="" aria-describedby="helpId" value={this.props.Note.title} onChange={(event)=>{event.preventDefault();
                this.props.handleChange(event.target.name,event.target.value)}}/>
                Note: {''} <input type="text" name="note" id="note" className="form-control" placeholder="" aria-describedby="helpId" value={this.props.Note.note} onChange={(event)=>{event.preventDefault();
                this.props.handleChange(event.target.name,event.target.value)}}/>


<button className="btn btn-primary" >submit</button>
               </form>)
        }

      
    }
    handleNoteUpdate(){
    
        if(this.props.isEditSubmit === true){
            return (  
            <form onSubmit={(event)=>{
                event.preventDefault()
                this.props.handleUpdate()}}>

                Title: {''}<input type="text" name="title" id="title" className="form-control" placeholder="" aria-describedby="helpId" value={this.props.Note.title} onChange={(event)=>{event.preventDefault()
                this.props.handleChange(event.target.name, event.target.value)}}/>
                Note: {''} <input type="text" name="note" id="note" className="form-control" placeholder="" aria-describedby="helpId" value={this.props.Note.note} onChange={(event)=>{event.preventDefault()
                this.props.handleChange(event.target.name, event.target.value)}}/>

                <button className="btn btn-primary" >submit</button>
               
            </form>)
        }
    }
    render() {
        return (
        
            <div>
             
      <div className="container">
      <div className="row">
        <div className="col">
             
                    {this.getItem()}

              </div>
              
                <div className="col-4">

                    <div className="row">
                    <div className="col-6">
                    <button  className="btn btn-primary" onClick={()=>this.props.changeEdit()}>{this.props.isEdit ? 'Off' : 'Show'}</button>
                    {this.handleNoteForm()}
                    </div>
                    <div className="col">
                    <button  className="btn btn-primary" onClick={()=>this.props.showUpdate()}>{this.props.isEditSubmit ? 'Off' : 'Update'}</button>
                    {this.handleNoteUpdate()}
                  
                    </div>
                    </div>
                   
                   
                  
                  
                </div>
           
              
              
                </div>    
               
      </div>
  
    </div>

  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Note: state.userNote,
        ten: state.vinh,
        net : state.nested,
        list : state.noteList,
        isEdit: state.isEdit,
        isEditSubmit: state.isEditSubmit
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAdd: (getdata) => {
            dispatch({
                type: 'ADD_STATE',
                getdata
              
            })
        },
        changeEdit: () => {
            dispatch({
              type: 'CHANGE_EDITFORM'
            })
          },
          handleEdit: ()=>{
              dispatch({
                  type: 'EDIT_FORM'
              })
          },
          handleChange:(name,value)=>{
              dispatch({
                  type:'HANDLE_CHANGE',
                    name,value
              })
          },
          handleClickEdit:()=>{
              dispatch({
                  type:''
              })
          },   
        showUpdate: ()=>{
            dispatch({
                type: 'CHANGE_EDITSUBMIT'
            })
        },
        handleUpdate:()=>{
            dispatch({
                type: 'UPDATE'
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)