import {connect}  from 'react-redux';
import { UpdateNewReviewTextActionCreater, AddReviewActionCreater } from '../../redux/store';
import './../../App.css'
import Reviews from './Reviews';
import './Reviews.css'
import React, { useEffect } from 'react';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { DeleteReviewActioncreater, SetReviewsActionCreater } from '../../redux/reviewReducer';


let ReviewsContainer = (props)=>{
    useEffect(()=>{
        fetch("http://localhost:8080/reviews")
        .then(function(response) {
          if (!response.ok) {
            throw new Error("Ошибка HTTP, статус " + response.status);
          }
          return response.json();
        })
    
        .then(function(data) {
          props.setReviews(data);
          console.log(data);
        })
        .catch(function(error) {
          console.error("Произошла ошибка:", error);
        });
    },[])

    return <Reviews {...props} /> 
}

function mapStateToProps(state){
    return{
        reviewsPage: state.reviewsPage
    }
}

function mapDispatchToProps(dispatch){
    return{
        addReview: ()=>{
            dispatch(AddReviewActionCreater())
        },
        UpdateNewReviewtext: (text)=>{
            dispatch(UpdateNewReviewTextActionCreater(text))
        },
        setReviews: (reviews)=>{
            dispatch(SetReviewsActionCreater(reviews))
        },
        deleteReview: (id)=>{
            dispatch(DeleteReviewActioncreater(id))
        }
    }
}

let AuthRedirect = withAuthRedirect(ReviewsContainer)
export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);;