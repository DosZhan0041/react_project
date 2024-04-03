import './../../App.css';
import React from "react";
import  {connect}  from 'react-redux';
import Registration from './registration';
import { createUser } from '../../redux/usersReducer';



let registrationContainer = (props) => {
      

  return <Registration {...props}  />
}

function mapStateToProps(state){
  return{
    usersPage: state.usersPage,
  }
}



export default connect(mapStateToProps, {createUser})(registrationContainer);