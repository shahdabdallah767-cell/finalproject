import * as zod from 'zod';

 
export const registerSchema = zod.object({
    name: zod.string().nonempty( "Name Is Required").min(3, "Name Must Be At Least 3 Characters").max(13, "Name Must Be At Maximum 13 Characters"),
    email: zod.string().nonempty("Email Is Required").email("Invalid Email Format"),
    password: zod.string().nonempty( "Password Is Required").regex(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/, `Password must contain at least one digit, one lowercase, one uppercase`),
    repassword: zod.string().nonempty("Password Confirmation Is Required"),
    phone: zod.string().nonempty( "Phone Is Required").regex(/01[0125][0-9]{8}/, "Phone Must Be An Egyptian Number"),
}).refine((value) => value.password === value.repassword, {
    message: "Passwords do not match",
    path: ["repassword"]
})