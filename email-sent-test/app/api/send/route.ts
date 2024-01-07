import { NextResponse } from "next/server";

export default async function GET(){
    try {
        return NextResponse.json({
            message: "hello world"
        })
    } catch (error) {
        return NextResponse.json({ error})
    }
}