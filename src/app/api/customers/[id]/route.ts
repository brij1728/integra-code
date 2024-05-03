import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const customer = await prisma.customer.findUnique({
    where: { id: Number(id) },
  });
  return new NextResponse(JSON.stringify(customer), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const updateData = await req.json();
  const updatedCustomer = await prisma.customer.update({
    where: { id: Number(id) },
    data: updateData,
  });
  return new NextResponse(JSON.stringify(updatedCustomer), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await prisma.customer.delete({
    where: { id: Number(id) },
  });
  return new NextResponse(null, { status: 204 });
}
