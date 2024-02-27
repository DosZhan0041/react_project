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
            state.material.push(newMaterial)
        }
        case UPDATE_NEW_MATERIAL_TEXT:{
            state.newMaterialName = action.newMaterialNameText;
            state.newMaterialDescription = action.newMaterialDescriptionText;
        }
    }   
    return state;
}

export default materialReducer;