import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectDB from "../../../../lib/dbConnect";

// GET → Single Product
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const collection = connectDB("products");
    const product = await collection.findOne({ _id: new ObjectId(params.id) });

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT → Update Product
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const collection = connectDB("products");
    const result = await collection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: body }
    );

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE → Remove Product
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const collection = connectDB("products");
    const result = await collection.deleteOne({
      _id: new ObjectId(params.id),
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
