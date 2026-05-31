import { LoginSchema } from "./login.schema";
import * as zod from 'zod';


export type LoginObjectType = zod.infer<typeof LoginSchema>