import api from "./axios"
import axios from "axios"


export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    console.log(data);
    try {
        const response = await api.post<LoginResponse>("/Auth", data);
        console.log(response);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }
        throw new Error("Server error");
    }
}

export const getInventory =async(from:any,to:any):Promise<any>=>{
        try {
            const response =await api.get(`/Inventory?pnum=${from}&psize=${to}`);
            console.log(response);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
            }
            throw new Error("Server error");
        }

}