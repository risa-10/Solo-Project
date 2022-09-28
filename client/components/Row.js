import React from 'react';
const Row = (props) => {
    const { id, handleDelete, name, city, zipcode, phoneNumber, isOpen, isAcceptingNewPatients, isAcceptingWalkIns, hasUrgentCare} = props;
    let formattedTime = props.createdAt;
    formattedTime = new Date(formattedTime);
    formattedTime = formattedTime.toLocaleString();
    let checked = [isOpen, isAcceptingNewPatients, isAcceptingWalkIns, hasUrgentCare];
    checked.forEach((el, i) => {
      if(el) checked[i] = String.fromCharCode(0x2714)
      else checked[i] = String.fromCharCode(0x2716)
    });
    // const checkmark = String.fromCharCode(d83dde46);
    return (
    <tbody>
    <tr>
      <td className="hospitalName">{name}</td>
      <td>{city}</td>
      <td>{zipcode}</td>
      <td>{phoneNumber}</td>
      <td>{checked[0]}</td>
      <td>{checked[1]}</td>
      <td>{checked[2]}</td>
      <td>{checked[3]}</td>
      <td>{formattedTime}</td>
      <td><button type="submit" id="toDelete" value={id} onClick={handleDelete}>Delete</button></td>
    </tr>
    </tbody>);
  };
export default Row;