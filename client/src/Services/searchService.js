import {get} from "../Utils/method"
export const searchService = async(key)=>{
    const result = await get(`${key}`);
    return result;
}