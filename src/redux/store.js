const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_REVIEW = "ADD_REVIEW";
let store = {
        _state: {
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
          material:[
                        {
                            name:"Газобетон",
                            image:"./images/Mat1.png",
                            id: 1,
                        },
                        {
                            name:"Цемент",
                            image:"./images/Mat2.png",
                            id: 2,
                        },
                        {
                            name:"Арматура",
                            image:"./images/Mat3.png",
                            id: 3,
                        },
                        {
                            name:"Доска",
                            image:"./images/Mat4.png",
                            id: 4,
                        },
                    ],

            reviews:[
                        {
                            message:"hello, i like it",
                        },
                        {
                            message: "good",
                        },
                        {
                            message: "i love you service",
                        },

                    ],
           
                    newHouseName: "",
                    newHouseDescription: "",
                    
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
                    if(action.type == ADD_HOUSE){
                        let newHouse ={
                            name: this.getState().newHouseName,
                            description: this.getState().newHouseDescription,
                            image: "./images/Home1.png",
                            id: this.getState().houses.length+1,
                        }
                        this.getState().houses.push(newHouse)
                        this._callSubscribe(store);
                    }
                    else if(action.type == UPDATE_NEW_HOUSES_TEXT)
                    {
                        this.getState().newHouseName = action.newHouseNameText;
                        this.getState().newHouseDescription = action.newHouseDescriptionText;
                        this._callSubscribe(store);
                    }
                    // else if(action.type == ADD_REVIEW)
                    // {
                    //     this.getState().reviews.push()
                    // }
                }
            }
export const AddHouseActionCreater =()=>({type: ADD_HOUSE})

export const UpdateNewHousesTextActionCreater = (newHouseName, newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT, newHouseNameText: newHouseName, newHouseDescriptionText: newHouseDescription})

export const AddReview =()=>{
    this.getState().reviews.push()
    this._callSubscribe(store)
}

export default store;

