import React, { Component } from 'react';
import './TodoItem.css';
import check from "../img/icon-check.svg";
import uncheck from "../img/icon-uncheck.svg";

class TodoItem  extends Component {
   

 

  render() {
    const {item, onClick} = this.props;
    console.log(this.props);
    let className = "TodoItem";
    let url = uncheck;
    if(item.isComplete){
      url = check;
      className += " TodoItem-complete";
    }
    return (
      <div className={className}>
        <img onClick={onClick} src={url} width="32" height="32"/>
        <p>I am Mạnh! I will go to {item.title}</p>
      </div>);
  }
}

export default TodoItem;