import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/Utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
