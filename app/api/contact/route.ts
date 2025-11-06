
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a full implementation, this would save to database
    console.log('Contact submission:', body)
    
    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 })
  }
}
