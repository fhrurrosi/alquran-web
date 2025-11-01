import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-linear-to-r from-[#0A400C] to-[#165019] shadow-xl'>
      <div className='flex flex-col sm:flex-row justify-between items-center p-4 max-w-7xl mx-auto gap-4'>
        <div className='flex items-center gap-3'>
          
          <h1 className='font-bold text-2xl md:text-3xl text-white tracking-wide'>
            AL-QURAN
          </h1>
        </div>
        <div className='relative w-full sm:w-auto sm:min-w-[320px]'>
          <input 
            type="text" 
            placeholder='Cari Surah...' 
            className='w-full px-4 py-2.5 pr-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all'
          />
          <svg 
            className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70'
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar