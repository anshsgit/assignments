import React, { useState, useRef, useEffect } from 'react';

const PetAdoptionForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    yourName: '',
    email: '',
    phone: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    const {name, value}  = event.target;
    setFormData((prev) => ({...prev, [name]: value}))
  }
  
  const submit = (event) => {
    event.preventDefault();
    
    if(formData.petName=='' || formData.petType=='' || formData.breed=='' || formData.email=='' || formData.phone=='') {
      alert('Fill all the fields before submitting');
    } else {
      setTableData(prev => [...prev, formData]);
      setFormData({petName: '', petType: '', breed: '', yourName: '', email: '', phone: ''});
    }
    
  }
  
  return (
    <div>
      <Form formData={formData} submit={submit} handleChange={handleChange} />
      <Table tableData={tableData} />
    </div>
  );
}

function Form({formData, submit, handleChange}) {
  const style = { margin: 'auto', backgroundColor: 'rgb(196, 164, 132, 0.75)', width: '40%', padding: '20px' };


  return (
    <div style={style}>
      <form style={{ margin: 'auto', width: '80%' }} onSubmit={submit}>
        <label htmlFor='petName' style={{ textAlign: 'left' }}>Pet Name</label>
        <input id='petName' type='text' placeholder='Pet Name' name='petName' value={formData.petName} onChange={handleChange} />

        <label htmlFor='petType' style={{ textAlign: 'left' }}>Pet Type</label>
        <input id='petType' type='text' placeholder='Pet Type' name='petType' value={formData.petType} onChange={handleChange} />

        <label htmlFor='breed' style={{ textAlign: 'left' }}>Breed</label>
        <input id='breed' type='text' placeholder='Breed' name='breed' value={formData.breed} onChange={handleChange} />

        <label htmlFor='yourName' style={{ textAlign: 'left' }}>Your Name</label>
        <input id='yourName' type='text' placeholder='Your Name' name='yourName' value={formData.yourName} onChange={handleChange} />

        <label htmlFor='email' style={{ textAlign: 'left' }}>Email</label>
        <input id='email' type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />

        <label htmlFor='phone' style={{ textAlign: 'left' }}>Phone</label>
        <input id='phone' type='text' placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

function Table({ tableData }) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Your Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.petName}</td>
            <td>{element.petType}</td>
            <td>{element.breed}</td>
            <td>{element.yourName}</td>
            <td>{element.email}</td>
            <td>{element.phone}</td>
          </tr>
        );
      })}
        </tbody>
      </table>
    </div>
  );
}

export default PetAdoptionForm;
