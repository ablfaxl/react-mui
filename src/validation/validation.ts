import {z, ZodType} from "zod";
import {Inputs} from "../features/auth/LoginForm.tsx";

export const UserSchema: ZodType<Inputs> = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(8, {message: "Password is too short"})
            .max(20, {message: "Password is too long"}),
    })
