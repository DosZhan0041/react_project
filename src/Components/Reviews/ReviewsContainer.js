import {connect}  from 'react-redux';
import { UpdateNewReviewTextActionCreater, AddReviewActionCreater } from '../../redux/store';
import './../../App.css'
import Reviews from './Reviews';
import './Reviews.css'
import React from 'react';

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
        }
    }
}

let ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;