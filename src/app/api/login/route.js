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
            return new NextResponse(JSON.stringify({estado: false,msg:"Incorrect User"}), {status: 200});
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);

        if (!passwordMatch) {
            return new NextResponse(JSON.stringify({estado: false}), {status: 200});
        }

        return new NextResponse(JSON.stringify({estado: true,id: user.id, name: user.username}));
        
    }catch(error){
        return new NextResponse(error.message, {status: 500});
    }
}

