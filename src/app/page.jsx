import React from 'react'
import Navbar from '@/app/components/navbar'
import Surah from '@/app/components/surah'
const page = async () => {
  const respones = await fetch('https://equran.id/api/v2/surat')
  const data = await respones.json()
  console.log(data)
  return (
    <div>
      <Navbar data={data.data}/>
      <Surah data={data.data} />
    </div>
  )
}

export default page