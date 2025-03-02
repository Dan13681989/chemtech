'use client'; // Must be first line

import dynamic from 'next/dynamic';

// Verify this path matches your actual file location
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { 
    ssr: false,
    loading: () => <div>Loading map...</div> 
  }
);

// Default export required
export default function MapClientComponent() {
  return <MapComponent />;
}

