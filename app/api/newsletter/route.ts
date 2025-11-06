
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a full implementation, this would save to database
    console.log('Newsletter signup:', body)
    
    return NextResponse.json({ success: true, message: 'Successfully subscribed!' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Subscription failed' }, { status: 500 })
  }
}
