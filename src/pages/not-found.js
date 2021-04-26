import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auto mt-8 max-w-screen-lg">
        <p className="text-center font-bold text-2xl">Not Found :C</p>
      </div>
    </div>
  );
}
