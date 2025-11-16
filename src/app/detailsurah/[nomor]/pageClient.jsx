'use client'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'

const PageClient = ({ nomorSurah }) => {
  const [nomor, setNomor] = useState(Number(nomorSurah))
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`)
      const surah = await response.json()
      setData(surah.data)

    }
    fetchData()
  }, [nomor])


  const prevSurah = () => {
    if (nomor > 1) {
      setNomor(e => e - 1)
    }
  }
  const nextSurah = () =>{
    if(nomor < 114){
      setNomor(e => e + 1)
    }
  }
  console.log(data)
  return (
    <>
      {data && <>

        <div className='min-h-screen bg-linear-to-br from-emerald-50 to-green-50'>
          <div className='max-w-4xl mx-auto px-4 pt-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all text-gray-700 font-medium'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Kembali
            </Link>
          </div>
          <div className='max-w-4xl mx-auto px-4 py-8'>
            <div className='bg-linear-to-br from-[#0A400C] to-[#165019] rounded-2xl shadow-2xl p-8 text-center border border-green-800/30'>
              <h1 className='text-5xl md:text-6xl font-bold text-white mb-4' style={{ fontFamily: 'serif' }}>
                {data.nama}
              </h1>
              <h2 className='text-3xl md:text-4xl font-bold text-green-100 mb-2'>
                {data.namaLatin}
              </h2>
              <p className='text-green-200 text-lg mb-4'>{data.arti}</p>
              <div className='flex justify-center items-center gap-4 text-white/80 text-sm'>
                <span className='px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm'>
                  {data.tempatTurun}
                </span>
                <span className='px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm'>
                  {data.jumlahAyat} Ayat
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-between max-w-4xl mx-auto mb-3 px-4 py-8'>
      
            <button onClick={prevSurah} className='bg-linear-to-br from-[#0A400C] to-[#165019] rounded-2xl shadow-2xl p-2 text-center border border-green-800/30 text-white font-bold'>
            {data.suratSebelumnya.namaLatin}</button>
            <button onClick={nextSurah} className='bg-linear-to-br from-[#0A400C] to-[#165019] rounded-2xl shadow-2xl p-2 text-center border border-green-800/30 text-white font-bold'>
           {data.suratSelanjutnya.namaLatin}</button>
          </div>
          <div className='max-w-4xl mx-auto px-4 pb-8 space-y-4'>
            {data.ayat.map((ayat) => (
              <div
                key={ayat.nomorAyat}
                className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden'
              >
                <div className='bg-linear-to-r from-[#0A400C] to-[#165019] px-4 py-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30'>
                      <span className='text-white font-bold text-sm'>{ayat.nomorAyat}</span>
                    </div>
                    <span className='text-green-100 text-sm font-medium'>
                      Ayat {ayat.nomorAyat}
                    </span>
                  </div>
                </div>
                <div className='p-6 space-y-4'>

                  <p className='text-right text-3xl md:text-4xl leading-loose text-gray-800 font-serif'>
                    {ayat.teksArab}
                  </p>

                  {ayat.teksLatin && (
                    <p className='text-gray-600 italic text-sm md:text-base leading-relaxed border-l-4 border-green-200 pl-4 bg-green-50 py-2 rounded'>
                      {ayat.teksLatin}
                    </p>
                  )}

                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    {ayat.teksIndonesia}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>}


    </>
  )
}

export default PageClient