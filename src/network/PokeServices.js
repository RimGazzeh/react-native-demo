import {HttpClient} from './HTTPClient';
import {ApiPaths} from './ApiConfig';

 
const getListPokemons = () =>{
    return HttpClient.get(ApiPaths.POKE);
} ;

const getPokemonsDetail = id =>{
    return HttpClient.get(ApiPaths.INFO + '/' + id);
};

export default {
    getListPokemons,
    getPokemonsDetail
}
