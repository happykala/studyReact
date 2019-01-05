import React,{Component} from 'react';

class TodoItem extends Component{

    handleDelete(){
        this.props.delete(this.props.index);
    }

    render(){
        return <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
    }
}

export default TodoItem;