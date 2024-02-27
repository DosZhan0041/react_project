import './Services.css';
import './../../App.css';
import React from "react";
import { AddHouseActionCreater, AddMaterialActionCreater, UpdateNewHousesTextActionCreater, UpdateNewMaterialTextActionCreater } from '../../redux/store';
import Services from './Services';
import  {connect}  from 'react-redux';



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
    }
  }
}
let ServicesContainer = connect(mapStateToProps, mapDispatchToProps)(Services);

export default ServicesContainer;