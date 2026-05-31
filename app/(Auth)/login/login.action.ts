'use server';

import { cookies } from "next/headers";
import { LoginObjectType } from "./login.types";


export async function LoginAction(data: LoginObjectType) {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
            method: "post",
            body: JSON.stringify(data),
            headers: { 'contenttype': 'application/Json' }
        });
        const finalRes = await res.json();
        console.log('finalRes of login', finalRes)
        // return res.ok;
        if (res.ok) {
            // return finalRes.token

            const cookie=await cookies();
            cookie.set('tkn',finalRes.token,{
                httpOnly:true,
                // secure:true,
                maxAge:60 * 60 * 24,
                sameSite:"lax",

            })
            return true;

        } return false;
    } catch (error) {
        console.log('err', error);

    }

}