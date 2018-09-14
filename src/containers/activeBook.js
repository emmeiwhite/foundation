import React,{Component} from 'react';



import {connect} from 'react-redux';
class ActiveBook extends Component{
    render(){
        if(!this.props.activeBook){
            return <div>Select a book to get started</div>
        }
        
        return(
            <div className="col-md-8">
                {this.props.activeBook.title}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook:state.activeBook
    }
}

export default connect(mapStateToProps)(ActiveBook);