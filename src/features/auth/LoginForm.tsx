import {Stack, TextField} from "@mui/material";
import {LoginButton} from "./LoginFormStyle.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserSchema} from "../../validation/validation.ts";
import {LoginInput} from "../../types/auth/loginType.ts";
import {loginApi} from "../../services/auth/authApi.ts";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginInput>({
        resolver: zodResolver(UserSchema),
    });

    const {mutate, isPending, isError} = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            if (data.status === 200) {
                toast.success(data.message)
            }
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
    const onSubmit = async (data: LoginInput) => {
        console.log(data)
        if (data) {
            mutate(data)
        }
    };
    return (
        <Stack width={'100%'} rowGap={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("email", {required: true})}
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <span className='error-text'>
                    {errors && errors.email?.message}
                </span>
                <TextField
                    {...register("password", {required: false})}
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <span className='error-text'>
                    {errors && errors.password?.message}
                </span>
                <LoginButton disabled={isPending} type="submit"
                             variant="contained"
                >
                    {isPending ? 'waiting...' : 'Login'}
                </LoginButton>
                {isError &&
                    <div className='error-text'>Error occurred while logging
                        in</div>}
            </form>
        </Stack>
    );
}

export default LoginForm;