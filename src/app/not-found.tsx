import Link from 'next/link'

export default function NotFound() {

  return (
    <div className='bg-white w-full h-screen fixed z-40 inset-0 flex flex-col items-center justify-center space-y-8'>
      <h1 className='md:text-7xl text-2xl'>
        404 page-not-found
      </h1>
      <div>
        <Link
          href={'/'}
          className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg border border-blue-500 text-white bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-400'
        >
          back to home
        </Link>
      </div>
    </div>
  )
}