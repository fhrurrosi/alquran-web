"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'

const Navbar = ({ data }) => {
  const [value, setValue] = useState("");
  const [isLoading, setisLoading] = useState(false)
  const [debouncedValue, setdebounceValue] = useState("")
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setdebounceValue(value)
      setisLoading(false)
    },500)
    return () => clearTimeout(timer)
  },[value])

  const handleChange = (e) =>{
    setValue(e.target.value)
    if(e.target.value){
      setisLoading(true)
    }
  }

  const fil = data.filter((item) => item.namaLatin.toLowerCase().includes(debouncedValue.toLowerCase()))

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-[#0A400C] to-[#165019] shadow-2xl backdrop-blur-md border-b border-white/10">
      
      <div className="flex flex-col items-center justify-between p-4 max-w-5xl mx-auto gap-3">

        <h1 className="font-bold text-3xl text-white tracking-widest drop-shadow-md">
          AL-QURAN
        </h1>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Cari Surah..."
            value={value}
            onChange={handleChange}
            className="w-full px-4 py-2.5 pr-10 bg-white/10 border border-white/30 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-200"
          />
          
          {isLoading ? (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          ) : (
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}

          {value && !isLoading && debouncedValue && (
            <ul className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-white backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-2 animate-fadeIn">
              {fil.length > 0 ? (
                fil.map((item) => (
                  <li
                    key={item.nomor}
                    className="px-3 py-2 hover:bg-white/20 rounded-lg cursor-pointer transition-all"
                  >
                    <Link href={`/detailsurah/${item.nomor}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">
                          {item.nomor}. {item.namaLatin}
                        </span>
                        <span className="text-sm opacity-80 italic">
                          {item.arti}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-center text-sm">
                  Tidak ditemukan
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;