import React from 'react'
import Link from 'next/link'

const Surah = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6 max-w-7xl mx-auto'>
      {data.map((surah) => (
        <Link 
          key={surah.nomor} 
          href={`/surah/${surah.nomor}`}
          className='group relative flex bg-linear-to-br from-[#0A400C] to-[#165019] p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-green-800/30'
        >
          <div className='flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shrink-0'>
            <h3 className='text-white font-bold text-xl'>{surah.nomor}</h3>
          </div>
          <div className='flex ml-4 justify-between items-center w-full gap-2'>
            <div className='flex-1 min-w-0'>
              <h3 className='text-white font-bold text-lg mb-1 truncate group-hover:text-green-200 transition-colors'>
                {surah.namaLatin}
              </h3>
              <p className='text-green-100/80 text-sm font-medium'>
                {surah.arti} • {surah.jumlahAyat} Ayat
              </p>
            </div>
            <div className='text-right shrink-0'>
              <h3 className='text-white font-bold text-2xl' style={{ fontFamily: 'serif' }}>
                {surah.nama}
              </h3>
            </div>
          </div>
          <div className='absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors duration-300 pointer-events-none' />
        </Link>
      ))}
    </div>
  )
}

export default Surah