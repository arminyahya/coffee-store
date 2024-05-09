import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log('Hey i am the middleware');
 return NextResponse.next();
}