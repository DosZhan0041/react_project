const ADD_MATERIAL = "ADD_MATERIAL"
const UPDATE_NEW_MATERIAL_TEXT = "UPDATE_NEW_MATERIAL_TEXT"

let initialState = {
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
          }
let materialReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_MATERIAL:{
           let newMaterial ={
                name: state.newMaterialName,
                description: state.newMaterialDescription,
                image: "./images/Mat1.png",
                id: state.material.length+1,
            }
            return{
                ...state,
                material:[...state.material, newMaterial],
                newMaterialName:"",
                newMaterialDescription:"",
            }
        }
        case UPDATE_NEW_MATERIAL_TEXT:{
            return{
                ...state,
                newMaterialName: action.newMaterialNameText,
                newMaterialDescription: action.newMaterialDescriptionText,
            }
        }
        default: 
            return state;
    }   
}
export const addMaterial =()=>({type: ADD_MATERIAL})
export const updateNewMaterialText = (newMaterialName, newMaterialDescription)=>({type: UPDATE_NEW_MATERIAL_TEXT, newMaterialNameText: newMaterialName, newMaterialDescriptionText: newMaterialDescription})
export default materialReducer;