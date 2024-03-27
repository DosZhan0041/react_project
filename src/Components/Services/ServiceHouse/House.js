import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './../Services.css';
import './../../../App.css';
import {useNavigate} from "react-router-dom";
import { Redirect } from 'react-router-dom';
const House = (props) => {

  const navigate = useNavigate();

  const deleteHouse = () => {
    props.deleteHouse(props.id);
  };

  let redirectDescription = (id) =>{
    navigate(`/houseDescription/${id}`)
  }

  
  return (
    <div className="House">
      <img src={props.image} alt="" />
      <div className='name_house'>
        <p>{props.name}</p>
      </div>
      <div className="delete">
        <button onClick={deleteHouse}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
      
      <div className="more">
        <button onClick={()=>{redirectDescription(props.id)}}>Подробнее</button>
      </div>
    </div>
  );
}


export default House;
