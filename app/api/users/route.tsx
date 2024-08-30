import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, nombre: 'Dark Scythe'},
        {id: 2, nombre: 'Eldrick Sword'},
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 404})
    
    return NextResponse.json({id: 1, nombre: body.nombre}, {status: 201});
}