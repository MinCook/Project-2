import { post , get , del} from "../Utils/method";
export const createCV = async(options)=>{
    const result = await post(`cv`,options);
    return result;
}
export const getCV = async()=>{
    const result = await get(`cv`);
    return result;
}
export const deleteCV = async (id) => {
    const result = await del(`cv/${id}`);
    return result;
  };