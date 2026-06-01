import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){


    const users=[
        {name:"Ahmed",age:30},
        {name:"menna",age:20}
    ]
    return NextResponse.json({message:"success",data:[]})

}