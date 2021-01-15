import './App.css';
import TodoItem from './components/TodoItem.js'
import { Component } from 'react';
import check from "./img/icon-check.svg";
import uncheck from "./img/icon-uncheck.svg";

class App  extends Component {
  constructor(){
    super();
    this.state= {
      newItem:"",
      checkAll:false,
      filter:"all",
      listTodoApp: [
        {title:"Đi ỉa"},
        {title:"Đi ngủ", isComplete:true},
        {title:"Đi lồm"},
        {title:"Đi xe"}
      ]
    };

    this.onItemClicked = this.onItemClicked.bind(this);
    this.onKeyUpInput = this.onKeyUpInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  onItemClicked(item){
    return (event) => {
      const {listTodoApp} = this.state;
      const index = listTodoApp.indexOf(item);
      listTodoApp[index].isComplete = !listTodoApp[index].isComplete;
        this.setState({
          listTodoApp: listTodoApp
        })
    }
  }

  onKeyUpInput(event){
    const keyCode = event.keyCode;
    const value = event.target.value;
    console.log("keyCode: "+ keyCode+"   value: "+ value);
    if(keyCode === 13 && value !== ""){
      const {listTodoApp} = this.state;
      listTodoApp.push({title: value});
      this.setState({
        listTodoApp: listTodoApp,
        newItem: "",
      })
    }
  }

  onChangeInput(event){
    this.setState({
      newItem: event.target.value
    })
  }

  checkAll(){
    const { checkAll,listTodoApp } = this.state;
    for(var i = 0; i < listTodoApp.length; i++){
      listTodoApp[i].isComplete = checkAll;
    }
    this.setState({
      checkAll: !checkAll,
      listTodoApp: listTodoApp
    })
  }

  filterSearch(event){
    let value = event.target.value;
    value = value.toLowerCase();
    this.setState({
      filter: value
    })
  }

  render(){
    const {listTodoApp, newItem, checkAll, filter} = this.state;
    let listTodoApp2 = [];
    let count = 0;
    console.log("Size1: "+ listTodoApp.length);
    if(filter != "all"){
      console.log("Size2: "+ listTodoApp2.length);
      for(var i = 0; i < listTodoApp.length; i++){
        let isComp = false;
        if("isComplete" in listTodoApp[i])
          isComp = listTodoApp[i].isComplete;
        console.log("i: "+ i);
        console.log("filter: "+ (filter === "active" ? false : true) +"   completed: "+ isComp);
        if((filter === "active" ? false : true) === isComp){
          count++;
          listTodoApp2.push(listTodoApp[i]);
        }
      }
    }else{
      listTodoApp2 = [].concat(listTodoApp);
      count = listTodoApp2.length;
    }
    return (
      <div className="App">
        <div className="Header">
          <img src={checkAll ? check : uncheck} width="32" height="32" onClick={this.checkAll} />
          <input type="text" value={newItem} placeholder="Add a new item" onKeyUp={this.onKeyUpInput} onChange={this.onChangeInput}/>
        </div>
          {
            listTodoApp2.length > 0 && listTodoApp2.map ((item, index) => <TodoItem item={item} key={index} onClick={this.onItemClicked(item)} />
            )
          }
          {
            listTodoApp2.length === 0 && 'Nothing here!'
          }
          <div className="Footer">
            <span>{count} item</span>
            <div>
              <input type="button" onClick={this.filterSearch} className={filter === "all"? "Active":""} value="All" />
              <input type="button" onClick={this.filterSearch} className={filter === "active"? "Active":""} value="Active" />
              <input type="button" onClick={this.filterSearch} className={filter === "completed"? "Active":""} value="Completed" />
            </div>
          </div>
      </div>
    );
  }
  
}

export default App;
