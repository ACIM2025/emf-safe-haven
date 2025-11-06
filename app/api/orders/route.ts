
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a full implementation, this would save to database
    console.log('Order submission:', body)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Order received successfully!',
      orderId: 'EMF-' + Date.now()
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Order failed' }, { status: 500 })
  }
}
