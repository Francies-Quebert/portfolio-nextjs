import Portfolio from "@/models/portfolio";
import { connectToDB } from "@/utils/databse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        await connectToDB()
        const portfolio = await Portfolio.findById(params.id)
            .then(portfolioItem => {
                if (!portfolioItem) {
                    console.log('Portfolio item not found.');
                    return;
                }

                // Access the image data
                const imageData = portfolioItem.images[0].data;
                console.log(imageData.imageBuffer,'imageData.imageBuffer')
                return imageData.imageBuffer;
                // console.log('Image data length:', imageData.length);
            })
        console.log(portfolio,'imagesss')
        return new NextResponse(portfolio, {
            status: 200,
            headers: {
                'Content-Type': 'image/jpeg'
            }
        })
    } catch (error) {
        return new NextResponse("Failed to fetch all prompts", { status: 500 })
    }
} 