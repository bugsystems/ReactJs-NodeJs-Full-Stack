import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(findresponse => {
        this.setState({
          data: findresponse
        });
        console.log(findresponse);
      });
  }
  render() {
    return (
      <div>
        <h4>Tasks</h4>

        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Customer Number/ID</th>
              <th>Customer Name</th>
              <th>Customer Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => (
              <tr key={item.task_id}>
                <td>{item.customer_id}</td>
                <td>
                  {item.customer_first_name} {item.customer_last_name}
                </td>
                <td>{item.customer_username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
