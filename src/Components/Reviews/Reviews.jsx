import './../../App.css'
import './Reviews.css'
import React from 'react';

let Reviews =(props)=>{

        const message = React.useRef();
    let addReview = ()=>{
        console.log(message.current.value)
    }

    return(
            <div className='Reviews'>
                <div className='Reviews_form'>
                    <textarea ref={message}/>
                    <button onClick = {addReview}>Add review</button>
                </div>
                {
                    props.state.reviews.map((review)=>(
                        <div className='review_block'>
                            <p> {review.message}</p>
                        </div>
                    ))
                }
            </div>
    );
}

export default Reviews;