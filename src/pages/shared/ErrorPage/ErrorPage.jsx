import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className='py-4 text-center w-screen h-screen flex items-center justify-center'>
            <div className=''>
            <h2 className='text-3xl font-bold py-3'>Oops! An Error Occurred 😢</h2>
            {error && (
          <div>
            <h5 className='text-xl text-red-600 font-semibold'>{error.status}</h5>
            
            <h5 className='text-2xl text-red-600 font-semibold'>{error.statusText || error.message}</h5>
          </div>
        )}
            </div>
        </div>
    );
};

export default ErrorPage;