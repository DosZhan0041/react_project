import reviewReducer from '../../redux/reviewReducer';
import './../../App.css'
import './Reviews.css'
import React from 'react';

let Reviews =(props)=>{
    const review = React.useRef();
    
let addReview = ()=>{
        props.addReview();
        review.current.value = "";
    }
let UpdateNewReviewtext = () =>{
    props.UpdateNewReviewtext(review.current.value);
}

    return(
            <div className='Reviews'>
                <div className='wrapperReviews'>
                    <div className='Reviews_form'>
                        <div className='quantityReviews'>
                            <p>{props.reviewsPage.reviews.length} Reviews</p>
                        </div>
                        <textarea placeholder = "your review... "ref={review} value={props.reviewsPage.newReview} onChange={UpdateNewReviewtext}/>
                        <button onClick = {addReview}>Add review</button>
                    {
                        props.reviewsPage.reviews.map((newRev)=>(
                            <div className='review_block' key={newRev.id}>
                                <div className='imgReview'>
                                    <img src="./images/userr.webp" alt="" />
                                </div>
                                <div className='textReview'>
                                    <h4>User</h4>
                                    <p> {newRev.review}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
    );
}

export default Reviews;