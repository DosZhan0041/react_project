import './Services.css';
import './../../App.css';
import ServiceHouse from './ServiceHouse/ServiceHouse';
import ServiceMaterial from './ServiceMaterial/ServiceMaterial';
import React from "react";
import { AddHouseActionCreater, UpdateNewHousesTextActionCreater } from '../../redux/store';
import Reviews from '../Reviews/Reviews';

let Services = (props) => {
  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();
  console.log(props);
  let addHouse = ()=>{
    props.dispatch(AddHouseActionCreater())
  }
let updateNewHousesText = () =>{
    props.dispatch(UpdateNewHousesTextActionCreater(newHouseName.current.value, newHouseDescription.current.value))
    }
  return (
    <div className="Services">
      <div className="form">
        <p>Add home</p>
        <input type="text" placeholder="Name of House" ref={newHouseName} value = {props.state.newHouseName} onChange={updateNewHousesText}/>
        <input type="text" placeholder="Description" ref={newHouseDescription} value = {props.state.newHouseDescription} onChange={updateNewHousesText}/>
        <button onClick={addHouse}>Submit</button>
      </div>
      <ServiceHouse state = {props.state}/>
      <ServiceMaterial state = {props.state}/>
      <Reviews state = {props.state}/>
    </div>
  );
}

export default Services;
