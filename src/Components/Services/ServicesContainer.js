import './Services.css';
import './../../App.css';
import React from "react";

import Services from './Services';
import  {connect}  from 'react-redux';
import { AddHouseActionCreater, DeleteHouseActionCreater, UpdateNewHousesTextActionCreater, setHouseActionCreater, ChangeHouseActionCreater } from '../../redux/housesReducer';
import { AddMaterialActionCreater, UpdateNewMaterialTextActionCreater } from '../../redux/materialReducer';



function mapStateToProps(state){
  return{
    housesPage: state.housesPage,
    materialPage: state.materialPage
  }
}

function mapDispatchToProps(dispatch){
  return{
    addHouse:()=>{
      dispatch(AddHouseActionCreater())
    },
    updateNewHousesText:(newHouseName, newHouseDescription)=>{
      dispatch(UpdateNewHousesTextActionCreater(newHouseName, newHouseDescription))
    },
    addMaterial:()=>{
      dispatch(AddMaterialActionCreater())
    },
    updateNewMaterialText:(newMaterialName, newMaterialDescription)=>{
      dispatch(UpdateNewMaterialTextActionCreater(newMaterialName, newMaterialDescription))
    },
    setHouse:(houses)=>{
      dispatch(setHouseActionCreater(houses))
    },
    deleteHouse: (id) => {
      dispatch(DeleteHouseActionCreater(id)); 
    },
    saveChanges: (id, name) => {
      dispatch(ChangeHouseActionCreater(id, name));
    }
     
  }
}
let ServicesContainer = connect(mapStateToProps, mapDispatchToProps)(Services);

export default ServicesContainer;