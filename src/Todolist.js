import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todolist extends Component {

  constructor(state){
    super(state);
    this.state = {
      list:[],
      inputValue: ''
    };
  }

  clickHandler(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  inputValueChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  handleDelete(index){
    const list = this.state.list;
    list.splice(index,1);
    this.setState({list});
  }

  render() {
    return (
      <div>
          <div>
            <input value={this.state.inputValue}  onChange={this.inputValueChange.bind(this)} />
            <button onClick={this.clickHandler.bind(this)}>Add</button>
          </div>
          <ul>
            { this.state.list.map((item,index) => {
              return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
            }) }
          </ul>
      </div>
    );
  }
}

export default Todolist;
