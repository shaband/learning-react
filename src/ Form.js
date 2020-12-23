import { Component } from "react";

class Form extends Component {
  initialState = {
    name: null,
    email: null,
    title: null,
    status: "active",
    role: "Admin",
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, title } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          class
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={this.handleChange}
        />

        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="title">title</label>
      </form>
    );
  }
}

export default Form;
