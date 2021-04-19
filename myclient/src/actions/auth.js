import * as api from '../api';
import {AUTH} from './actiontype';
export const register = (formData,history) =>  async(dispatch) => {
    try{
        const {data} =  await api.register(formData,history);
        dispatch({type:AUTH,data});
        history.push('/');

    }catch(error){
        console.log(error);
    }
}

export const login = (formData,history) => async(dispatch) =>{
    try{
        const {data} =  await api.login(formData,history);
        dispatch({type:AUTH,data});
        history.push('/');

    }catch(error){
        console.log(error);
    }
}
