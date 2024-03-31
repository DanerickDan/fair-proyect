import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request)
{
    try {
        const data = await request.json()

        const user = await prisma.user.findFirst({
            //data:data
            where:{
                username: data.username
            }
        });

        if(!user) {
            return new NextResponse("Usuario No Encontrado", {status: 404});
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);

        if (!passwordMatch) {
            return new NextResponse("Contraseña Incorrecta", {status: 401});
        }

        //return true;

        return new NextResponse(JSON.stringify(user), {
            
            headers: {"Content-Type": "application/json"},
            status: 200
        });
    }catch(error){
        return new NextResponse(error.message, {status: 500});
    }
}

