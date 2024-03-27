const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const SET_HOUSE = "SET_HOUSE"
const DELETE_HOUSE = "DELETE_HOUSE";
const PUT_HOUSE = "PUT_HOUSE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
let initialState = {
    houses: [
                // {
                //     name: "Из газобетона",
                //     image: "./images/Home1.png",
                //     id: 1,
                //     description: "",
                // },
                // {
                //     name: "Из кирпича",
                //     image: "./images/Home2.png",
                //     id: 2,
                //     description: "",
                // },
                // {
                //     name: "Из дерева",
                //     image: "./images/Home2.png",
                //     id: 3,
                //     description: "",
                // },
                // {
                //     name: "Из керамических кирпчией",
                //     image: "./images/Home2.png",
                //     id: 4,
                //     description: "",
                // },
            ],
            newHouseName: "",
            newHouseDescription: "",
            changeHouse: "",
            isLoad: true,
        };
let housesReducer = (state = initialState, action)=>{
    switch (action.type){
     case ADD_HOUSE:{
        let postData = {
                    name: state.newHouseName,
                    description: state.newHouseDescription,
                    image: "./images/Home1.png",
                    id: state.houses.length+1,
                    }
        fetch("https://65e1f029a8583365b317a8da.mockapi.io/houses/v1/houses", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
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
            houses:[...state.houses, postData
            ],
            newHouseName:"",
            newHouseDescription:"",
        }
    }

    case DELETE_HOUSE:{
        fetch(`https://65e1f029a8583365b317a8da.mockapi.io/houses/v1/houses/${action.id}`, {
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
        const filteredhouses = state.houses.filter(house => house.id != action.id);
        return {
            ...state,
            houses: filteredhouses
        };
    }
    
    case TOGGLE_PRELOADER: {
      return {...state, isLoad: action.status}
    }

    case UPDATE_NEW_HOUSES_TEXT:{
            return{
                ...state,
                newHouseName: action.newHouseNameText,
                newHouseDescription:  action.newHouseDescriptionText,
            }
        }
    case SET_HOUSE:{
        return{
            ...state,
            houses: action.houses,
        }
    }

    case PUT_HOUSE:{
          let updateHouse = {...action.house, description: state.newHouseDescription, name: state.newHouseName}
          fetch(`https://65e1f029a8583365b317a8da.mockapi.io/houses/v1/houses/${action.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateHouse)
          })
          .then(function(response) {
            if (!response.ok) {
              throw new Error("HTTP error, status " + response.status);
            }
            return response.json();
          })
          .then(function(data) {
            console.log("Данные успешно обновлены:", data);
          })
          .catch(function(error) {
            console.error("Произошла ошибка:", error);
          });
          return {
            ...state, 
            houses: state.houses.map(house=>{
              if(house.id===action.id){
                return{
                  ...house,
                  name: state.newHouseName,
                  description: state.newHouseDescription
                }
              }
              return house;
            })
          }
        }
    
        default:
         return state;
    }
}

export const togglePreloader = (status) => ({type: TOGGLE_PRELOADER, status: status})
export const addHouse =()=>({type: ADD_HOUSE})
export const deleteHouse = (id)=>({type: DELETE_HOUSE, id:id})
export const updateNewHousesText = (newHouseName, newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT, newHouseNameText: newHouseName, newHouseDescriptionText: newHouseDescription})
export const setHouse =(houses)=>({type: SET_HOUSE, houses:houses})
export const saveChanges = (id, house)=>({type: PUT_HOUSE, id:id, house:house})
export default housesReducer;


