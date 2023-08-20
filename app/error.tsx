'use client'
import React from 'react'

function error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

    React.useEffect(() => {
        // Log the error to an error reporting service
        console.error(error,'error')
      }, [error])
    return (
        <div className='h-full bg-primary text-white flex justify-center items-center'>
            Error bad request
        </div>
    )
}

export default error