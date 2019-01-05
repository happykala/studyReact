import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todolist extends Component {

  constructor(state){
    super(state);
    this.state = {
      list:[],
      inputValue: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.inputValueChange = this.inputValueChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  getTodoitem(){
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index} />
        )
      }) 
    );
  }

  render() {
    return (
      <div>
          <div>
            <input value={this.state.inputValue}  onChange={this.inputValueChange} />
            <button onClick={this.clickHandler}>Add</button>
          </div>
          <ul>
            {this.getTodoitem()}
          </ul>
      </div>
    );
  }
}

export default Todolist;
