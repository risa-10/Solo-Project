import React from 'react';
const Form = (props) => {
    const{ handleInput, handleSubmit} = props;
    return (
    <div class = "container">
    <form onSubmit={handleSubmit}>
    <label> Hospital Name: &emsp;</label>
    <input name="name" onChange={handleInput}/><br/>
    <label> City: &emsp;</label>
    <input name="city" onChange={handleInput}/><br/>
    <label> Zipcode: &emsp;</label>
    <input name="zipcode" onChange={handleInput}/><br/>
    <label> Phone Number: &emsp;</label>
    <input name="phoneNumber" onChange={handleInput}/><br/>
    <label>Please Check all that apply</label><br/>
    <input type="checkbox" id="isOpen" name="isOpen" value="yes" onChange={handleInput}/>
    <label for="isOpen">Is Currently Open</label><br/>
    <input type="checkbox" id="isAcceptingNewPatients" name="isAcceptingNewPatients" value="yes" onChange={handleInput}/>
    <label for="isAcceptingNewPatients">Accepting New Patients</label><br/>
    <input type="checkbox" id="isAcceptingWalkIns" name="isAcceptingWalkIns" value="yes" onChange={handleInput}/>
    <label for="isAcceptingWalkIns">Accepting Walk-Ins</label><br/>
    <input type="checkbox" id="hasUrgentCare" name="hasUrgentCare" value="yes" onChange={handleInput}/>
    <label for="hasUrgentCare">Urgent Care option available</label><br/>
    <p />
    <input type="submit" value="Submit" />
    </form>
    </div>
    );
  };
export default Form;