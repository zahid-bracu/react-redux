import {add_value,remove_value} from '../type';

const previousValue={
    array:[]
}

export default function(state=previousValue,action) {
    switch(action.type){
        case add_value:
            const temp=[...state.array,action.payload];
            console.log(action.payload);
            return {array:temp};
            
        case remove_value:
            console.log(action);
            var tempTwo=[...state.array];
            tempTwo.pop();
            return {array:tempTwo};
        default:
            return state;
    }
}