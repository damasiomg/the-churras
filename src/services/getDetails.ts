import { api } from "./api"

export const getDetails = async function(id: string){
    try {
        const response = await api.get(`/getDetails/${id}`);
        return response;
    } catch(error) {
        throw error
    }
}