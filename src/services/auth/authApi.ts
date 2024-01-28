import {LoginInput} from "../../types/auth/loginType.ts";

interface LoginResponse {
    status: number,
    message: string,
    data?: string
}

export const loginApi = async (data: LoginInput): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (data.password && data.email) {
                resolve({
                    status: 200,
                    message: 'user logged in!',
                    data: 'JWT TOKEN'
                })
            } else {
                reject({
                    status: 400,
                    message: 'email or password is required'
                })
            }
        }, 1000)
    })
}