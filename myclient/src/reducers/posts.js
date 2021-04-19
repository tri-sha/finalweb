import {FETCH_ALL,CREATE} from '../actions/actiontype'
const reducer = (posts=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        default:
            return posts;
    }
}
export default reducer;