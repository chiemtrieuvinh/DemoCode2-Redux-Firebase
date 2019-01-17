import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { firebaseConnect } from './firebaseConnect.js';
class NoteItem extends Component {
    componentWillMount(){
      
       this.props.getList(this.props.arraylist)
    
    }
  render() {

    return (
      <div>
        
          <div id="accordianId" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="section1HeaderId">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#accordianId" href={"#"+this.props.id} aria-expanded="true" aria-controls="section1ContentId">
                        {this.props.title}
                        </a>
                        <div className="btn-group float-right">
                                
                                <button className="btn btn-info" onClick={()=>this.props.handleClickEdit(this.props.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>this.props.handleDelete(this.props.id)}>Delete</button>
                                   </div>
                            </h5>
                           
                        </div>
                        <div id={this.props.id} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                            <div className="card-body">
                          {this.props.note}
                            </div>
                        </div>
                    </div>
                  
                </div>

      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Note: state.userNote,
        ten: state.vinh,
        net : state.nested,
        list : state.noteList,
        isEdit: state.isEdit
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
          showUpdate: ()=>{
              dispatch({
                  type: 'CHANGE_EDITSUBMIT'
              })
          },
        handleClickEdit:(getid) => {
            dispatch({
                type:'EDIT_FORM',
                getid
            })
        },
        getList:(arraylist)=>{
            dispatch({
                type: 'LAY_LIST',
                arraylist
            })
        },
        handleUpdate:()=>{
            dispatch({
                type: 'UPDATE'
            })
        },
        handleDelete:(iddelete)=>{
            dispatch({
                type: 'DELETE',
                iddelete
            })
        },
        }
        
    }


export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)