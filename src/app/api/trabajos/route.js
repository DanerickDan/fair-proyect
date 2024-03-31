import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request)
{
    try {

        const data = await request.json();

        const userId = data.idUser;
        const category = data.idCategory;

        const work = await prisma.WorkPost.create({
            data:{
                service: data.service,
                description: data.description,
                Price: data.Price,
                user: {connect: {id: userId}},
                category: {connect: {id: category}},
            }
        });

        if (work) {
            const images = [];
            const workposte = work.id;
            for (const image of data.images) {
                const createdImage = await prisma.images.create({
                    data:{
                        url: image.url,
                        workPost: {connect: {id: workposte}}
                    }
                });
                images.push(createdImage);
            }
        }

        return new NextResponse(JSON.stringify(work), {
            headers:{"Content-Type":"application/json"},
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
}

export async function GET(){
    try {
        const works = await prisma.WorkPost.findMany()
        return NextResponse.json({data:works}, {status: 200});
    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
}
