import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib';

export async function GET() {
  const customers = await prisma.customer.findMany();
  return new NextResponse(JSON.stringify(customers), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(req: NextRequest) {
  const customerData = await req.json();
  const newCustomer = await prisma.customer.create({
    data: customerData,
  });
  return new NextResponse(JSON.stringify(newCustomer), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
