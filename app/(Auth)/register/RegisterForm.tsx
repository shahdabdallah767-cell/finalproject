'use client';

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterObjectType } from './register.types';
import { registerSchema } from './register.schema';
import { RegisterAction } from './regiter.action';
import { toast } from 'sonner';
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";








export default function RegisterForm() {


    const router=useRouter();
    const { handleSubmit, control, formState: { errors } } = useForm<RegisterObjectType>({
        resolver: zodResolver(registerSchema),
        mode: 'onSubmit',
        defaultValues: {
            name: "",
            email: "",
            password: "",
            repassword: "",
            phone: "",
        }
    });



     async function mysubmit(data: RegisterObjectType) {
        // console.log('Registered', data)
        // console.log('Form errors:', errors)

         const isRegisteredSuccessfuly= await RegisterAction(data);
        //  console.log('log', isRegisteredSuccessfuly)
         if (isRegisteredSuccessfuly){
            //toast=>success
            toast.success("Email Created Successfuly",{duration:3000,position:'top-right'});
            setTimeout(() => {
                router.push('/login');
            }, 3000);

            //Navigation


         }else{
            //toast=>error
             toast.success("account already exist ", { duration: 3000, position: 'top-right' });


        }


       
    }

    return (
        <form onSubmit={handleSubmit(mysubmit)} className='flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
            <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="name">User Name</FieldLabel>
                        <Input
                            {...field}
                            id="name"
                            aria-invalid={fieldState.invalid}
                            placeholder="User Name..."
                            autoComplete="off"
                        />
                        <FieldDescription>
                            Enter your full name.
                        </FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="phone">User Phone</FieldLabel>
                        <Input
                            {...field}
                            id="phone"
                            aria-invalid={fieldState.invalid}
                            placeholder="User Phone..."
                            autoComplete="off"
                            type="tel"
                        />
                        <FieldDescription>
                            Enter your contact number.
                        </FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

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

            <Controller
                name="repassword"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="repassword">Password Confirmation</FieldLabel>
                        <Input
                            {...field}
                            id="repassword"
                            aria-invalid={fieldState.invalid}
                            placeholder="Confirm Password..."
                            autoComplete="off"
                            type="password"
                        />
                        <FieldDescription>
                            Re-enter your password to confirm.
                        </FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            <Button type="submit" className="mt-4 bg-[#0aad0a] hover:bg-[#099209] text-white font-bold py-6 rounded-xl">
                Register Now
            </Button>
        </form>
    )
}
