import { dbConfig } from "@/app/utils/dbConfig";
import myPostModel from "@/app/utils/model/postModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { desc, image } = await req.json();
    const getD = await myPostModel.create({ desc, image });
    return NextResponse.json({
      message: "Post created!",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
    });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const getD = await myPostModel.find();
    return NextResponse.json({
      message: "Post Found",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
    });
  }
};
