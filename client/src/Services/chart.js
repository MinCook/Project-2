import {  get  } from "../Utils/method";

export const getChart = async()=>{
    const result = await get(`jobs`);
    return result;
}