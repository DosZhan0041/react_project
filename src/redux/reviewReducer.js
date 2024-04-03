const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_NEW_REVIEW_TEXT = "UPDATE_NEW_REVIEW_TEXT";
const SET_REVIEWS = "SET_REVIEWS"
const DELETE_REVIEW = "DELETE_REVIEW"

let initialState ={
    reviews:[
                // {
                //     id: 1,
                //     review:"hello, i like it",
                // },
                // {
                //     id: 2,
                //     review: "good",
                // },
                // {
                //     id: 3,
                //     review: "i love you service",
                // },

            ],
            newReview: "",
            totalReviews:0,
        }
let reviewReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_REVIEW: {
            let newRev={
                review: state.newReview,
                id: state.reviews.length+1,
                user: JSON.parse(localStorage.getItem("user"))
            }
            fetch("http://localhost:8080/reviews", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRev)
                })
              .then(function(response) {
                if (!response.ok) {
                  throw new Error("Ошибка HTTP, статус " + response.status);
                }
                return response.json();
              })
              .then(function(data) {
                console.log("Данные успешно отправлены:", data);
              })
              .catch(function(error) {
                console.error("Произошла ошибка:", error);
              });
            return{
                ...state,
                reviews: [...state.reviews, newRev],
                newReview: "",
            }
        }
        case UPDATE_NEW_REVIEW_TEXT: {
            return{
                ...state,
                newReview: action.newReviewText,
            }
        }
        case SET_REVIEWS:{
            return{
                ...state,
                reviews: action.reviews,
                totalReviews: action.reviews.length,
            }
        }

        case DELETE_REVIEW: {
            fetch(`http://localhost:8080/reviews/${action.id}`, {
              method: 'DELETE',
          })
          .then(function(response) {
              if (!response.ok) {
                  throw new Error("Ошибка HTTP, статус " + response.status);
              }
              console.log("Дом успешно удален");
              
          })
          .catch(function(error) {
              console.error("Произошла ошибка:", error);
          });
          const filteredReviews = state.reviews.filter(review => review.id != action.id);
          return {
              ...state,
              reviews: filteredReviews
          };
        }

        default: 
            return state;
    }
}
export const AddReviewActionCreater =()=>({type: ADD_REVIEW})
export const SetReviewsActionCreater = (reviews)=>({type: SET_REVIEWS, reviews: reviews})
export const UpdateNewReviewTextActionCreater =(newReview)=>({type: UPDATE_NEW_REVIEW_TEXT, newReviewText: newReview})
export const DeleteReviewActioncreater = (id) =>({type: DELETE_REVIEW, id:id})
export default reviewReducer;