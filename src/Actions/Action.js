import { GET_DATA } from "../Reducer";

export const getDetails = data => ({
    type: GET_DATA,
    payload: data.articles
})