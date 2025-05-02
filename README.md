# Next.js Request Method Test (TypeScript)

This project demonstrates how to make GET requests from a client component to a Next.js API route using App Router with TypeScript, and how to verify the request method in the network tab.

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Verifying Request Methods

1. Open your browser's Developer Tools (F12 or Cmd+Option+I on Mac)
2. Navigate to the Network tab
3. Refresh the page or click the "Fetch Again" button
4. Look for requests to `/api/data` in the Network tab
5. Click on the request to see details, including:
   - The Request Method (should be GET)
   - Headers
   - Request/Response data

## Project Structure

- `app/page.tsx` - The main page component
- `app/client-component.tsx` - Client component that makes fetch requests
- `app/api/data/route.ts` - API route handler for GET requests
- `tsconfig.json` - TypeScript configuration
