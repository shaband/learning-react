import {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Form from "./ Form";


class App extends Component{
  state={
    users: [
      {
        name: "sameh",
        email: "sameh@sameh.com",
        title: "bla7",
        status: "active",
        role: "Admin",
      },
      {
        name: "hussen",
        email: "hussen@hussen.com",
        title: "tofaaaaah",
        status: "active",
        role: "Admin",
      },
      {
        name: "lolo",
        email: "lolo@Lolo.com",
        title: "lobya",
        status: "active",
        role: "Admin",
      },
      {
        name: "soso",
        email: "soso@soso.com",
        title: "lobyaaaa3",
        status: "active",
        role: "Admin",
      },
    ],
  }
  render(){
    const {users}=this.state
    const removeUser = (index) => {
      const {users} = this.state
    
      this.setState({
        users: users.filter((user, i) => {
          return i !== index
        }),
      })
    }
    return (
      <div className="App">
        <Table usersData={users} removeUser={removeUser} />
        <Form />
      </div>
    );
  }
}

export default App;
