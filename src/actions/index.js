import { SET_CURRENT_PAGE } from './types';

export const setCurrentPage = (p, sp) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {page: p, subpage: sp}
    }
}