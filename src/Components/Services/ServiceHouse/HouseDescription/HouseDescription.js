import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import "./HouseDescription.css"
import './../../../../App.css';

const HouseDescription = (props) => {
    const [edit,setEdit] = useState(false)

  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();
  let updateNewHousesText = () => {
    props.updateNewHousesText(newHouseName.current.value,newHouseDescription.current.value)
  }

  let saveChanges = ()=>{
    props.saveChanges(props.oneHouse.id, props.oneHouse)
    changeEdit()
  }
  let changeEdit = ()=>{
    edit? setEdit(false) : setEdit(true)
  }


  return (
    <div className="HouseDescription">
    
      <div className='container'>
        <div className='houseWrapper'>
            
            <img src={props.oneHouse.image}/>
            {
              edit ? (
                <div>
                  <h1>Дом <input type='text' ref={newHouseName} value={props.housesPage.newHouseName} onChange={updateNewHousesText}/></h1>
                  <p>Описание: <input type='text' ref={newHouseDescription} value={props.housesPage.newHouseDescription} onChange={updateNewHousesText}/></p>
                </div>
              ):
              (
                <div>
                  <h1>Дом {props.oneHouse.name}</h1>
                  <p>Описание: {props.oneHouse.description}</p>
                </div>
              )
            }
            {
              edit? (
                <div>
                  <button onClick={saveChanges}>Сохранить</button>
                  <button onClick={changeEdit}>Отмена</button>
                </div>
              ):<button onClick={changeEdit}>Редактировать</button>

            }
            
        </div>
      </div>
      
    </div>
  );
}


export default HouseDescription;
