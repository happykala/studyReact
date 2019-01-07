import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';
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
      <Fragment>
        {/*todolist功能点*/}
          <div>
            <label htmlFor="listdata">请输入列表内容</label>
            <input id="listdata" className='input' value={this.state.inputValue}  onChange={this.inputValueChange} />
            <button onClick={this.clickHandler}>Add</button>
          </div>
          <ul>
            {this.getTodoitem()}
          </ul>
      </Fragment>
    );
  }
}

export default Todolist; 
