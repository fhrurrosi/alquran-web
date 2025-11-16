import React from 'react'
import PageClient from './PageClient'

const page = async ({params}) => {
  const {nomor} = await params
  console.log("ini nomor",nomor)
  return (
    <PageClient nomorSurah={nomor}></PageClient>
  )
}

export default page