'use client';

import { useState, useEffect } from 'react';

interface ApiData {
  message: string;
  timestamp: string;
  requestMethod: string;
}

export default function ClientComponent() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Making a GET request to our API route
        const response = await fetch('/api/data');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json() as ApiData;
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Manual fetch function for button
  const handleManualFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json() as ApiData;
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data from API (GET method)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button 
        onClick={handleManualFetch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '16px'
        }}
      >
        Fetch Again
      </button>
      <p style={{ marginTop: '16px' }}>
        Open your browser's network tab to see the request method being used.
      </p>
    </div>
  );
}
