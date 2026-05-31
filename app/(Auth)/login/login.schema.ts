import * as zod from 'zod';

 
export const LoginSchema = zod.object({
    email: zod.string().nonempty("Email Is Required").email("Invalid Email Format"),
    password: zod.string().nonempty( "Password Is Required").regex(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/, `Password must contain at least one digit, one lowercase, one uppercase`),
   
})