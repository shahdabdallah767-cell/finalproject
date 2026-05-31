import { registerSchema } from "./register.schema";
import * as zod from 'zod';


 export type RegisterObjectType = zod.infer<typeof registerSchema>