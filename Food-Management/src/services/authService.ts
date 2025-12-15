import api from "./Axios"

export interface LoginRequest{
    email:string,
    password:string
}

export interface LoginResponse{
    accessToken:string,
    refreshToken:string
}

export const login = async (data:LoginRequest):Promise<LoginResponse> =>{

    const response = await api.post<LoginResponse>("/Auth",data);
    return response.data;  
}
