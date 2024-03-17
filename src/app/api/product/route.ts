import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma";

export async function GET(req: NextRequest) {
  const productId = req.nextUrl.searchParams.get("productId");
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized user", success: false });
  }

  // const data = await prisma.stores.findFirst({
  //     where: {
  //     id: parseInt(`${storeId}`),
  //     useremail: session?.user?.email!,
  //     },
  //     include: {
  //     products: true,
  //     },
  // });

  const data = await prisma.products.findFirst({
    where: {
      id: Number(productId),
    },
  });

  return NextResponse.json(data || {});
}
