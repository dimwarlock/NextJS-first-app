import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}:{params:{id:number}}) {
    if (params.id > 20)
        return NextResponse.json({error: 'No existe.'}, {status: 404})
   
    return NextResponse.json([
        {id: 1, nombre: 'Dark Scythe'},
    ]);
}