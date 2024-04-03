import './Services.css';
import './../../App.css';
import ServiceHouse from './ServiceHouse/ServiceHouse';
import ServiceMaterial from './ServiceMaterial/ServiceMaterial';
import React, { useEffect, useState } from "react";
import PreLoader from '../PreLoader/PreLoder';


let Services = (props) => {

  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();
  const newMaterialName = React.useRef();
  const newMaterialDescription = React.useRef();
  

  let addHouse = ()=>{
    props.addHouse();
    newHouseName.current.value="";
  }
  let updateNewHousesText = () =>{
    props.updateNewHousesText(newHouseName.current.value, newHouseDescription.current.value);
  }
      
  let addMaterial =()=>{
    props.addMaterial();
    newMaterialName.current.value="";
  }
  let updateNewMaterialText=()=>{
    props.updateNewMaterialText(newMaterialName.current.value, newMaterialDescription.current.value);
  }

  return (
    <div className="Services">
      {
        props.housesPage.isLoad ? <PreLoader/> 
        : 
        (<div>
            <div className="form">
              <p>Add home</p>
              <input type="text" placeholder="Name of House" ref={newHouseName} value = {props.housesPage.newHouseName} onChange={updateNewHousesText}/>
              <input type="text" placeholder="Description" ref={newHouseDescription} value = {props.housesPage.newHouseDescription} onChange={updateNewHousesText}/>
              <button onClick={addHouse}>Submit</button>
            </div>
            <ServiceHouse state = {props.housesPage} deleteHouse={props.deleteHouse} saveChanges = {props.saveChanges} />
            <div className='form'>
              <p>Add Material</p>
              <input type="text" placeholder='input material' ref={newMaterialName} value={props.materialPage.newMaterialName} onChange={updateNewMaterialText}/>
              <input type="text" placeholder='Description' ref={newMaterialDescription} value={props.materialPage.newMaterialDescription} onChange={updateNewMaterialText}/>
              <button onClick={addMaterial}>Submit</button>
            </div>
            <ServiceMaterial state = {props.materialPage}/>
        </div>)
      }
      
      
    </div>
  );
}

export default Services;
