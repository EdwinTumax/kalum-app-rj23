import kalumApi from '../apis/kalumApi';

const BASE_URL = '';

export const findAll = async() => {
    try{
        const response = await kalumApi.get(`${BASE_URL}/carreras-tecnicas`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const save = async(carreraTecnica) => {
    try{
        return await kalumApi.post(`${BASE_URL}/carreras-tecnicas`,carreraTecnica);
    }catch(error) {
        console.log(error);
    }
    return null;
}

export const remove = async(id) => {
    try{
        return await kalumApi.delete(`${BASE_URL}/carreras-tecnicas/${id}`);
    }catch(error){
        console.log(error);
    }
}

export const update = async({carreraId,carreraTecnica}) => {
    try{
        return await kalumApi.put(`${BASE_URL}/carreras-tecnicas/${carreraId}`,{carreraTecnica});   
    }catch(error){
        console.log(error);
    }
}

