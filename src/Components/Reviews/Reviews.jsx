import { UpdateNewReviewTextActionCreater, AddReviewActionCreater } from '../../redux/store';
import './../../App.css'
import './Reviews.css'
import React from 'react';

let Reviews =(props)=>{
    const newReview = React.useRef();
    console.log(props);
    
let addReview = ()=>{
        props.dispatch(AddReviewActionCreater())
    }
let UpdateNewReviewtext = () =>{
    props.dispatch(UpdateNewReviewTextActionCreater(newReview.current.value))
}

    return(
            <div className='Reviews'>
                <div className='Reviews_form'>
                    <textarea ref={newReview} value={props.state.newReview} onChange={UpdateNewReviewtext}/>
                    <button onClick = {addReview}>Add review</button>
                </div>
                {
                    props.state.reviews.map((review)=>(
                        <div className='review_block' key={review.id}>
                            <p> {review.review}</p>
                        </div>
                    ))
                }
            </div>
    );
}

export default Reviews;