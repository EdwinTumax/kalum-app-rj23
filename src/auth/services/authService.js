import axios from 'axios';
import qs from 'query-string';
import { APP_PASSWORD, APP_USERNAME, BASE_URL_AUTH } from '../../config/utils';
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const BASE_URL = BASE_URL_AUTH

export const loginUser = async(userData) => {
    const token = Buffer.from(`${APP_USERNAME}:${APP_PASSWORD}`,'UTF8').toString('base64');
    const config = {
        headers : {
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':`Basic ${token}`    
        }
    }
    userData = {...userData, grant_type:'password'}
    try{
        const response = await axios.post(`${BASE_URL}/token`,qs.stringify(userData),config);
        return response;
    }catch(error){
        console.log(error);
    }
}