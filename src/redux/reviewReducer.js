const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_NEW_REVIEW_TEXT = "UPDATE_NEW_REVIEW_TEXT";

let initialState ={
    reviews:[
                {
                    id: 1,
                    review:"hello, i like it",
                },
                {
                    id: 2,
                    review: "good",
                },
                {
                    id: 3,
                    review: "i love you service",
                },

            ],
            newReview: "",
        }
let reviewReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_REVIEW: {
            let newRev={
                review: state.newReview,
                id: state.reviews.length+1,
            }
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
        default: 
            return state;
    }
}
export const AddReviewActionCreater =()=>({type: ADD_REVIEW})

export const UpdateNewReviewTextActionCreater =(newReview)=>({type: UPDATE_NEW_REVIEW_TEXT, newReviewText: newReview})
export default reviewReducer;