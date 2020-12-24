import { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    email: "",
    title: "",
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

  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, email, title } = this.state;
    return (
      <form  onSubmit={this.submitForm }>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">name</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} id="name" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
              <input type="text" name="email" id="email" value={email} 
             onChange={this.handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">title</label>
              <input type="text" name="title" id="title" value={title}
              onChange={this.handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>

      );
  }
}

export default Form;
