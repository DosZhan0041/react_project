import './Services.css';
import './../../App.css';
import React, { useEffect } from "react";

import Services from './Services';
import  {connect}  from 'react-redux';
import { addHouse, deleteHouse, updateNewHousesText, setHouse, saveChanges, togglePreloader } from '../../redux/housesReducer';
import { addMaterial, updateNewMaterialText } from '../../redux/materialReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';



let ServicesContainer = (props) => {
  
  useEffect(() => {

    props.togglePreloader(true)
    fetch("https://65e1f029a8583365b317a8da.mockapi.io/houses/v1/houses")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Ошибка HTTP, статус " + response.status);
      }
      return response.json();
    })

    .then(function(data) {
      props.setHouse(data);
      props.togglePreloader(false);
    })
    .catch(function(error) {
      console.error("Произошла ошибка:", error);
    });
  
  },[]);
    

  return <Services {...props}/>
}

function mapStateToProps(state){
  return{
    housesPage: state.housesPage,
    materialPage: state.materialPage
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     addHouse:()=>{
//       dispatch(AddHouseActionCreater())
//     },
//     updateNewHousesText:(newHouseName, newHouseDescription)=>{
//       dispatch(UpdateNewHousesTextActionCreater(newHouseName, newHouseDescription))
//     },
//     addMaterial:()=>{
//       dispatch(AddMaterialActionCreater())
//     },
//     updateNewMaterialText:(newMaterialName, newMaterialDescription)=>{
//       dispatch(UpdateNewMaterialTextActionCreater(newMaterialName, newMaterialDescription))
//     },
//     setHouse:(houses)=>{
//       dispatch(setHouseActionCreater(houses))
//     },
//     deleteHouse: (id) => {
//       dispatch(DeleteHouseActionCreater(id)); 
//     },
//     saveChanges: (id, name) => {
//       dispatch(ChangeHouseActionCreater(id, name));
//     },
//     toglePreloader: (status) => {
//       dispatch(togglePreloaderActionCreater(status))
//     }
//   }
// }

let AuthRedirect = withAuthRedirect(ServicesContainer)

export default connect(mapStateToProps, {addHouse,updateNewHousesText,addMaterial,updateNewMaterialText,setHouse,deleteHouse, saveChanges,togglePreloader})(AuthRedirect);