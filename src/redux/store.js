import housesReducer from "./housesReducer";
import reviewReducer from "./reviewReducer";
import materialReducer from "./materialReducer";

const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_NEW_REVIEW_TEXT = "UPDATE_NEW_REVIEW_TEXT";
const ADD_MATERIAL = "ADD_MATERIAL"
const UPDATE_NEW_MATERIAL_TEXT = "UPDATE_NEW_MATERIAL_TEXT"

let store = {
        _state: {
        housesPage:{
                houses: [
                            {
                                name: "Из газобетона",
                                image: "./images/Home1.png",
                                id: 1,
                                description: "",
                            },
                            {
                                name: "Из кирпича",
                                image: "./images/Home2.png",
                                id: 2,
                                description: "",
                            },
                            {
                                name: "Из дерева",
                                image: "./images/Home2.png",
                                id: 3,
                                description: "",
                            },
                            {
                                name: "Из керамических кирпчией",
                                image: "./images/Home2.png",
                                id: 4,
                                description: "",
                            },
                        ],
                        newHouseName: "",
                        newHouseDescription: "",
                    },
        materialPage:{
          material:[
                        {
                            name:"Газобетон",
                            image:"./images/Mat1.png",
                            id: 1,
                            description: "",
                        },
                        {
                            name:"Цемент",
                            image:"./images/Mat2.png",
                            id: 2,
                            description: "",
                        },
                        {
                            name:"Арматура",
                            image:"./images/Mat3.png",
                            id: 3,
                            description: "",
                        },
                        {
                            name:"Доска",
                            image:"./images/Mat4.png",
                            id: 4,
                            description: "",
                        },
                    ],
                    newMaterialName:"",
                    newMaterialDescription:"",
                },
        reviewsPage:{
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
                    
                 }, 
                 getState(){
                    return this._state;
                 },
                 _callSubscribe(){
                    console.log("state changed")
                },
     
                subscribe(observer){
                this._callSubscribe = observer;
                },
               
                dispatch(action){
                    this.getState().housesPage = housesReducer(this.getState().housesPage, action)
                    this.getState().reviewsPage = reviewReducer(this.getState().reviewsPage, action)
                    this.getState().materialPage = materialReducer(this.getState().materialPage, action)
                    this._callSubscribe()
                }
            }
export const AddHouseActionCreater =()=>({type: ADD_HOUSE})

export const UpdateNewHousesTextActionCreater = (newHouseName, newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT, newHouseNameText: newHouseName, newHouseDescriptionText: newHouseDescription})

export const AddMaterialActionCreater =()=>({type: ADD_MATERIAL})

export const UpdateNewMaterialTextActionCreater = (newMaterialName, newMaterialDescription)=>({type: UPDATE_NEW_MATERIAL_TEXT, newMaterialNameText: newMaterialName, newMaterialDescriptionText: newMaterialDescription})

export const AddReviewActionCreater =()=>({type: ADD_REVIEW})

export const UpdateNewReviewTextActionCreater =(newReview)=>({type: UPDATE_NEW_REVIEW_TEXT, newReviewText: newReview})

export default store;

