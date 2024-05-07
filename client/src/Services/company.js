import {   del, get } from "../Utils/method";
export const getCompany = async()=>{
    const result = await get(`company`);
    return result;
}
export const deleteCompany = async(id)=>{
    const result = await del(`company/${id}`);
    return result;
}

