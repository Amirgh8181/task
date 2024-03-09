'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { CgDanger } from "react-icons/cg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const router = useRouter()


  return (
    <div className='w-full h-screen fixed inset-0 bg-red-200 flex flex-col items-center justify-center space-y-6 z-40'>
      <div className='animate-bounce text-7xl'>
        <CgDanger className='text-red-900' />
      </div>
      <h3 className='text-xl text-ellipsis overflow-hidden whitespace-nowrap w-[70vw] text-center'>{error.message}</h3>
      <div>
        <button
          onClick={
            () => reset()
          }
          className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg text-red-600 bg-white  
          hover:bg-red-600 hover:text-white transition-all duration-400 m-3'
        >
          Try again
        </button>
        <button
          onClick={
            () => router.push('/')
          }
          className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg text-red-600 bg-white hover:bg-red-600
           hover:text-white transition-all duration-400 m-3'
        >
          go to home
        </button>
      </div>
    </div>
  )
}