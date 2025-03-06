'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false }
);

export default function MapWrapper() {
  return <MapComponent />;
}
