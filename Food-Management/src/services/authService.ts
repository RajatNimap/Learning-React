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
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                throw error.response.data;
            }
        }
        throw new Error("Network Server error");
    }


}
