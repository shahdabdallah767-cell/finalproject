'use client';

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginObjectType } from './login.types';
import { LoginSchema } from './login.schema';
import { LoginAction } from './login.action';
import { toast } from 'sonner';
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";








export default function LoginForm() {


    const router = useRouter();
    const { handleSubmit, control, formState: { errors } } = useForm<LoginObjectType>({
        resolver: zodResolver(LoginSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            password: "",

        }
    });



    async function mysubmit(data: LoginObjectType) {
        // console.log('Registered', data)
        // console.log('Form errors:', errors)

        const isLoginSuccessfuly = await LoginAction(data);
        //  console.log('log', isRegisteredSuccessfuly)
        if (isLoginSuccessfuly) {
            //toast=>success
            toast.success("Welcom ya Fresh Carter", { duration: 3000, position: 'top-right' });
            setTimeout(() => {
                router.push('/');
            }, 3000);

            //Navigation


        } else {
            //toast=>error
            toast.success("Email Or Password is Wrong ", { duration: 3000, position: 'top-right' });


        }



    }

    return (
        <form onSubmit={handleSubmit(mysubmit)} className='flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100'>

            <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">User Email</FieldLabel>
                        <Input
                            {...field}
                            id="email"
                            aria-invalid={fieldState.invalid}
                            placeholder="User Email..."
                            autoComplete="off"
                            type="email"
                        />
                        <FieldDescription>
                            Enter your email address.
                        </FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="password">User Password</FieldLabel>
                        <Input
                            {...field}
                            id="password"
                            aria-invalid={fieldState.invalid}
                            placeholder="User Password..."
                            autoComplete="off"
                            type="password"
                        />
                        <FieldDescription>
                            Choose a strong password.
                        </FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />



            <Button type="submit" className="mt-4 bg-[#0aad0a] hover:bg-[#099209] text-white font-bold py-6 rounded-xl">
                Login Now
            </Button>
        </form>
    )
}
