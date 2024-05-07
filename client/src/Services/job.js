import { get, del } from "../Utils/method";

export const getJob = async () => {
  const result = await get(`jobs`);
  return result;
};
export const deleteJob = async (id) => {
  const result = await del(`jobs/${id}`);
  return result;
};
