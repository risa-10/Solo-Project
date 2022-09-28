import React, { Component } from 'react';
import Button from './Button';
import Row from './Row';
import Form from './Form';
import Report from './Report';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalList: [],
      newHospital: {
        name: 'noName',
        city: 'unknownCity',
        zipcode: 99999,
        phoneNumber: 'unknownPhone',
        isOpen: null,
        isAcceptingNewPatients: null,
        isAcceptingWalkIns: null,
        hasUrgentCare: null
      },
      showOpenOnly: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showOpen = this.showOpen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };
  componentDidMount() {
    fetch('http://localhost:3000/retriever')
      .then((res) => res.json())
      .then((hospitals) => {
        const list = hospitals; 
        return this.setState({
          hospitalList: list
        });
      })
      .catch(err => console.log('App.componentDidMount: getHospitals: ERROR: ', err));
  }

  handleInput(e) {
    const label = e.target.name;
    let value = e.target.value;
    if(value === "yes") value = true;
    const updated = {...this.state.newHospital};
    updated[label] = value;
    return this.setState({newHospital : updated });
  }
  handleSubmit(e) {
    fetch('http://localhost:3000/retriever', {
      method: 'POST',
      body: JSON.stringify(this.state.newHospital),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('handleSubmit: ERROR: ', err));
  }
  showOpen(e) {
    let nextStatus = !this.state.showOpenOnly;
    return this.setState({showOpenOnly : nextStatus })
  }
  handleDelete(e) {
    console.log(e.target.value);
    const id = e.target.value;
    fetch('http://localhost:3000/retriever', {
      method: 'DELETE',
      body: JSON.stringify({_id: id}),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => this.componentDidMount())
    .catch(err => console.log('handleSubmit: ERROR: ', err));
  }

  render() {
    const list = this.state.hospitalList;
    const rows = [];
    list.forEach((el, i) => {
      // add a logic to filter out by current mood
      if(this.state.showOpenOnly) {
        if(list[i].isOpen) rows.push(<Row key={i} row={i}  id={list[i]._id}  handleDelete={this.handleDelete} name={list[i].name} city={list[i].city} zipcode={list[i].zipcode} phoneNumber = {list[i].phoneNumber} isOpen={list[i].isOpen} isAcceptingNewPatients={list[i].isAcceptingNewPatients} isAcceptingWalkIns={list[i].isAcceptingWalkIns} hasUrgentCare={list[i].hasUrgentCare} createdAt={list[i].createdAt}/>)
      } else rows.push(<Row key={i} row={i}  id={list[i]._id} handleDelete={this.handleDelete} name={list[i].name} city={list[i].city} zipcode={list[i].zipcode} phoneNumber = {list[i].phoneNumber} isOpen={list[i].isOpen} isAcceptingNewPatients={list[i].isAcceptingNewPatients} isAcceptingWalkIns={list[i].isAcceptingWalkIns} hasUrgentCare={list[i].hasUrgentCare} createdAt={list[i].createdAt}/>)
    })
    return (
      <div>
      <Button key={0} showOpen={this.showOpen}/>
      <table>
        <thead>
        <tr>
        <td>&nbsp;</td>
        <td>City</td>
        <td>Zip Code</td>
        <td>Phone Number</td>
        <td>Open</td>
        <td>Accepting New Patients</td>
        <td>Walk-In OK</td>
        <td>Urgent Care Available</td>
        <td>Created At</td>
        <td>Delete</td>
        </tr>
        </thead>
        {rows}
      </table>
      <Form key={2} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
      <Report key={3} />
      </div>
    )    
  }
}

export default Home;