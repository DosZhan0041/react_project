import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './../Services.css';
import './../../../App.css';

const House = (props) => {

  const deleteHouse = () => {
    props.deleteHouse(props.id);
  };

  const saveChanges =()=>{
    props.saveChanges(props.id, props.name)
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
      <div className="put">
        <button>
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
      <div className="more">
        <button>Подробнее</button>
      </div>
    </div>
  );
}


export default House;
