import React, { useEffect } from 'react';
import Header from '../components/header';

export default function Following() {
  useEffect(() => {
    document.title = 'Following - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
    </div>
  );
}
