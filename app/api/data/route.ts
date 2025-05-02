import { NextRequest, NextResponse } from 'next/server';

interface ResponseData {
  message: string;
  timestamp: string;
  requestMethod: string;
}

// This handler will respond to GET requests
export async function GET(request: NextRequest): Promise<NextResponse<ResponseData>> {
  // Log the request method on the server side
  console.log('Request method:', request.method);
  
  // Create sample data to return
  const data: ResponseData = {
    message: 'This data was fetched using a GET request',
    timestamp: new Date().toISOString(),
    requestMethod: request.method // This will show as "GET" in the response
  };
  
  // Return the data as JSON
  return NextResponse.json(data);
}
