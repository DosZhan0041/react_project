import "./../../App.css";
import "./Reviews.css";
import React from "react";
import { MdAutoDelete } from "react-icons/md";

let Reviews = (props) => {
  const review = React.useRef();

  let addReview = () => {
    props.addReview({
      id:props.authUser.id,
      name:props.authUser.name,
      surname: props.authUser.surname,
      email: props.authUser.email,
      urlImg: props.authUser.urlImg
    });
    review.current.value = "";
  };
  let UpdateNewReviewtext = () => {
    props.UpdateNewReviewtext(review.current.value);
  };

  let deleteReview = (id)=>{
    props.deleteReview(id)
  }

  return (
    <div className="Reviews">
      <div className="wrapperReviews">
        <div className="Reviews_form">
          <div className="quantityReviews">
            <p>{props.reviewsPage.reviews.length} Reviews</p>
          </div>
          <textarea
            placeholder="your review... "
            ref={review}
            value={props.reviewsPage.newReview}
            onChange={UpdateNewReviewtext}
          />
          <button className="addreview"  onClick={addReview}>Add review</button>
          {props.reviewsPage.reviews.map((newRev) => (
            <div className="review_block" key={newRev.id}>
              <div className="imgReview">
                <img src={newRev.user.urlImg ?  (newRev.user.urlImg) : ("https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png")} alt="" />
              </div>
              <div className="textReview">
                <h4>{newRev.user.name ? (newRev.user.name): ("User")} </h4>
                <p> {newRev.review}</p>
              </div>
              {
                newRev.user.email === (props.authUser && props.authUser.email) 
                ? 
                (<button className="delete_review" onClick={()=>{deleteReview(newRev.id)}}><MdAutoDelete /></button>)
                :
                (
                <div></div>
                )
              }
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
