import PokeServices from './PokeServices'
import{
    GET_ALL_POKES,
    GET_POKE_ERROR,
    GET_POKE_DETAIL
} from './ApiCallsTypes'

export const getPokes = () =>{
    return dispatch =>{
        PokeServices.getListPokemons()
        .then(response => dispatch(getPokesSuccess(response.data.results)))
        .catch(error => dispatch(getPokeError(error)))
    }
}

export const getPokeDetail = name =>{
    return dispatch =>{
        PokeServices.getPokemonsDetail(name)
        .then(response =>dispatch(getPokeDetailSuccess(response)))
        .catch(error => dispatch(getPokeError(error)))
    }
}

// Data Result

export const getPokesSuccess = response =>{
    return {type: GET_ALL_POKES, payload : response}
}

export const getPokeDetailSuccess = response =>{
    return {type: GET_POKE_DETAIL, payload : response}
}

export const getPokeError = error =>{
    return {type: GET_POKE_ERROR, payload : error}
}