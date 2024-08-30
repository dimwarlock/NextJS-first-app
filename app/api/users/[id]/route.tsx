import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest, {params}:{params:{id:number}}) {
    if (params.id > 20)
        return NextResponse.json({error: 'No existe.'}, {status: 404})
   
    return NextResponse.json([
        {id: 1, nombre: 'Dark Scythe'},
    ]);
}

export async function PUT(request: NextRequest, {params}:{params: {id: number}}) {
    const body = await request.json();

    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 404})
    
    if(params.id > 20)
        return NextResponse.json({error: 'No existe el Usuario'}, {status: 404})

    return NextResponse.json({id: 1, nombre: body.nombre})
}

export function DELETE(request: NextRequest, {params}:{params: {id: number}}) {
    if(params.id > 20)
        return NextResponse.json({error: 'No existe el Usuario'}, {status: 404})
    
    return NextResponse.json({})       
}