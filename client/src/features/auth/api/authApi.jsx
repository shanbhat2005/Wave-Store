import API from "../../../services/axiosInstance";

export const registerApi = async (credentials) => {
  const response = await API.post("/auth/register", credentials);
  return response;
};

export const loginApi = async (credentials) => {
  const response = await API.post("/auth/login", credentials);
  return response;
};

export const refreshApi=async()=>{
return await API.post("/auth/refresh");
}