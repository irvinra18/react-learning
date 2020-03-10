import {SAVE_COMMENT} from 'actions/types';

export default function (state = [], action){
    switch(action.type){
        default: 
            return state;
        case SAVE_COMMENT:
            return [...state,action.payload];
            
    }
}