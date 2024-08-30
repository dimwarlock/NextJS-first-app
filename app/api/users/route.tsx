import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, nombre: 'Dark Scythe'},
        {id: 2, nombre: 'Eldrick Sword'},
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    if(!body.nombre)
        return NextResponse.json({error: 'Se requiere el nombre.'}, {status: 404})
    return NextResponse.json({id: 1, nombre: body.nombre}, {status: 201});
}