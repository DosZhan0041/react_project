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
            state.reviews.push(newRev)
        }
        case UPDATE_NEW_REVIEW_TEXT: {
            state.newReview = action.newReviewText;
        }
    }
    return state;
}

export default reviewReducer;