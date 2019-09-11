//Personnel page
import React, { Component } from 'react';
class Personnel extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/users')
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
        <h4>Personnel</h4>
        <table className='table table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>Personnel Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => (
              <tr key={item.personnel_id}>
                <td>
                  {item.personnel_onames} {''}
                  {item.personnel_fname}
                </td>
                <td>{item.personnel_email}</td>
                <td>{item.personnel_phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Personnel;
