
import '../../../../App.css';
import React, { useEffect, useState } from "react";
import  {connect}  from 'react-redux';

import HouseDescripton from './HouseDescription';
import {useParams} from "react-router-dom"
import withAuthRedirect from '../../../HOC/withAuthRedirect';
import {updateNewHousesText,saveChanges} from '../../../../redux/housesReducer';

let HouseDescriptionContainer = (props) => {
    const [oneHouse, setOneHouse] = useState({});
    const { id } = useParams();
    
  useEffect(() => {
    fetch(`https://65e1f029a8583365b317a8da.mockapi.io/houses/v1/houses/${id}`)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Ошибка HTTP, статус " + response.status);
      }
      return response.json();
    })

    .then(function(data) {
        console.log(data)
      setOneHouse(data)
      debugger;
    })
    .catch(function(error) {
      console.error("Произошла ошибка:", error);
    });
  
  },[props.housesPage.houses]);
    

  return <HouseDescripton {...props} oneHouse = {oneHouse}/>
}

function mapStateToProps(state){
  return{
    housesPage: state.housesPage,
  }
}


let AuthRedirect = withAuthRedirect(HouseDescriptionContainer)

export default connect(mapStateToProps, {updateNewHousesText,saveChanges})(AuthRedirect);