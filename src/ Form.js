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
      <form >
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="name" class="block text-sm font-medium text-gray-700">name</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} id="name" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700">email</label>
              <input type="text" name="email" id="email" value={email} 
             onChange={this.handleChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="title" class="block text-sm font-medium text-gray-700">title</label>
              <input type="text" name="title" id="title" value={title}
              onChange={this.handleChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>

      );
  }
}

export default Form;
