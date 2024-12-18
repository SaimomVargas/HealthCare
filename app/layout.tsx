import React from 'react';
import { Toaster } from 'react-hot-toast';

// ... resto do código ...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
} 