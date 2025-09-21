import { NextResponse } from "next/server";
import connectDB from "../../../lib/dbConnect";

export async function GET() {
    try {
        const productCollection = connectDB("products");
        const products = await productCollection.find({}).toArray();
        return NextResponse.json(products);
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
     }
}