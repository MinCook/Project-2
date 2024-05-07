
import {post ,get} from "../Utils/method"

export const createAccount = async(options)=>{
    const result = await post(`account`,options);
    return result;
}
export const checkName = async(name)=>{
    const result = await get(`account?name=${name}`);
    return result;
}
export const checkLogin = async(name, password)=>{
    const result = await get(`login?name=${name}&password=${password}`);
    return result;
}