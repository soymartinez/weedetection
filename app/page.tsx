"use client"

import Image from 'next/image'
import { Camera } from 'components/icons'
import { useState } from 'react'

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <main className={`bg-black/10`}>
      <div className={`h-screenn`}>
        <section className={`bg-primary flex flex-col items-center overflow-hidden text-center py-5 px-2 rounded-b-3xl`}>
          <Image
            src={`/logo.png`}
            alt={`Weedetection`}
            width={120}
            height={120}
          />
          <h1 className='text-4xl font-black mt-2'>Weedetection</h1>
          <h3 className='text-2xl font-black mt-3'>¿Qué cepa deseas escanear?</h3>
          <input className='outline-primary w-10/12 h-12 mt-3 px-4 rounded-2xl' type='text' />
          <div className='bg-white h-1 w-2/5 mt-3 rounded-full' />
        </section>
        <section className='flex flex-col items-center justify-center min-h-[365px]'>
          <label onClick={() => setModal(!modal)}>
            <Camera className='text-white w-28 md:w-48 cursor-pointer' />
          </label>
          <input hidden type={'file'} accept={'.png, .jpg, .jpeg'} id='upload' />
          <h3 className='text-primary text-3xl font-black mt-8'>Toma una foto</h3>
        </section>
      </div>
    </main>
  )
}
