import React from 'react';
const Button = (props) => {
    const {showOpen} = props;
    return (
    <div>
    <label class="switch">
    <input type="checkbox" onClick={showOpen}/>
    <span class="slider round"></span>
    </label>
    <span class="showopen">&nbsp;Show Open Location Only</span>
    </div>);
  };
export default Button;