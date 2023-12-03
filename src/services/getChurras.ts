import { api } from "./api"

export const getChurras = async function(){
    try {
        const response = await api.get('/getChurras');
        return response;
    } catch(error) {
        throw error
    }
}