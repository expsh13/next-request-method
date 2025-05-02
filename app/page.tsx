import ClientComponent from './client-component';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Next.js Request Method Test (TypeScript)</h1>
      <p>This page demonstrates a client component making requests to a Next.js API route.</p>
      
      <ClientComponent />
    </main>
  );
}
