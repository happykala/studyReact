import React, { Component } from 'react';

class Todolist extends Component {

  constructor(state){
    super(state);
    this.state = {
      list:[
        '学习React',
        '学习Angular',
        '学习Vue'
      ],
      inputValue: ''
    };
  }

  clickHandler(){
    this.setState({
      list: [...this.state.list,this.state.inputValue]
    })
  }

  inputValueChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  liDelateHandel(index){
    const list = this.state.list;
    list.splice(index,1);
    this.setState({list})
  }

  render() {
    return (
      <div>
          <div>
            <input  onChange={this.inputValueChange.bind(this)} />
            <button onClick={this.clickHandler.bind(this)}>Add</button>
          </div>
          <ul>
            { this.state.list.map((item,index) => {
              return <li onClick={this.liDelateHandel.bind(this,index)} key={index}>{item}</li>
            }) }
          </ul>
      </div>
    );
  }
}

export default Todolist;
