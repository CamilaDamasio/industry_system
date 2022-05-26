import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { api } from '../Api';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='body'>
      <Header />
      { isLoading ? (
        <h1>Home</h1>
      ) : <Loading /> }
    </div>
  );
}
