import Portfolio from "@/models/portfolio";
import { connectToDB } from "@/utils/databse";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDB()

        const portfolio = await Portfolio.find({})
        return new Response(JSON.stringify(portfolio), { status: 200 })
    } catch (error) {
        return new NextResponse("Failed to fetch all prompts", { status: 500 })
    }
} 