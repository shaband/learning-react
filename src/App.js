import {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Form from "./ Form";


class App extends Component {
  state = {
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
  };

  handleSubmit = (user) => {
    this.setState({ users: [...this.state.users,user] });
  };
  render() {
    const { users } = this.state;
    const removeUser = (index) => {
      const { users } = this.state;

      this.setState({
        users: users.filter((user, i) => {
          return i !== index;
        }),
      });
    };
    return (
      <div className="App m-4">
        <Table
         
         
          usersData={users}
        
        
            removeUser={removeUser}
               
    
        />
        <Form              handleSubmit={this.handleSubmit}
/>
      </div>
    );
  }
}

export default App;
