import '@/scss/globals.css'
import type { AppProps } from 'next/app'
import Loading from '@/components/loading';
import React, { useState } from 'react';



export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <Component {...pageProps} />
    </>
  );
}
