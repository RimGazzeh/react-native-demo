import {
    GET_ALL_POKES,
    GET_POKE_DETAIL,
    GET_POKE_ERROR
} from './ApiCallsTypes'

const INITIAL_STATE = {
    listAllPokes: [],
    errorPokes: null ,
    detailPoke: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_POKES:
            return {listAllPokes: action.payload };
        case GET_POKE_ERROR:
            return {errorPokes: action.payload };
        case GET_POKE_DETAIL:
            return {detailPoke: action.payload };
        default:
            return state;
    }
};
