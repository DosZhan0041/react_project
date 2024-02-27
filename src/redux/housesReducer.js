const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";

let initialState = {
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
        };
let housesReducer = (state = initialState, action)=>{
    switch (action.type){
     case ADD_HOUSE:{
        let newHouse ={
            name: state.newHouseName,
            description: state.newHouseDescription,
            image: "./images/Home1.png",
            id: state.houses.length+1,
        }
        state.houses.push(newHouse)
    }
    case UPDATE_NEW_HOUSES_TEXT:{
        state.newHouseName = action.newHouseNameText;
        state.newHouseDescription = action.newHouseDescriptionText;
        }
    }
    return state;
}

export default housesReducer;