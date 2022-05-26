import React, { useEffect, useState } from 'react';
import { api } from '../Api';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default function RawMaterials() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='body'>
      <Header />
      { !isLoading ? (
        <h1>RawMaterials</h1>
      ) : <Loading /> }
    </div>
  );
}