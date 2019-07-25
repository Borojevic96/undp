import { SET_CURRENT_PAGE } from '../actions/types';

const INITIAL_STATE = {
    page: 0,
    subpage: 0
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return { ...state, page: action.payload.page, subpage: action.payload.subpage };
        default:
            return state;
    }
}