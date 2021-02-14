export const GET_DATA  = "GET_DATA";

export default function Reducer(state =[], action){
    console.log(action.payload)
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                getData: action.payload
            }
    }
}