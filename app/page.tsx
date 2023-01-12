"use client"

import Image from 'next/image'
import { Camera, Arrow } from 'components/icons'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')

  const handleImage = (e: any) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setModal(false)
  }

  return (
    <main className={`bg-black/10`}>
      <div className={`h-screenn`}>
        <section className={`bg-primary flex flex-col items-center overflow-hidden text-center py-5 px-2 rounded-b-3xl`}>
          <motion.div
            animate={{
              y: image ? '-15vh' : 0,
              opacity: image ? 0 : 1,
              height: image ? 0 : 'auto',
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
          >
            <Image
              src={`/logo.png`}
              alt={`Weedetection`}
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className={'flex flex-col -space-y-3'}
            initial={{
              fontSize: '2.25rem',
              margin: '0.5rem 0 0',
            }}
            animate={{
              margin: image ? '1rem 0 0' : '0.5rem 0 0',
              fontSize: image ? '1.575rem' : '2.25rem',
              textAlign: image ? 'left' : 'center',
              width: image ? '83.333333%' : 'auto',
            }}
            transition={{
              duration: 0.3,
              type: 'spring',
              delay: 0.3,
            }}
          >
            <h1>Weedetection</h1>
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: image ? 1 : 0,
                height: image ? 'auto' : 0,
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
              }}
              className={`text-base ml-4 font-black text-white transition-opacity`}>
              By la cara del cannabis
            </motion.span>
          </motion.div>
          <motion.h3
            initial={{ margin: '1.25rem 0 0' }}
            animate={{
              opacity: image ? 0 : 1,
              height: image ? 0 : 'auto',
              margin: image ? 0 : '1.25rem 0 0',
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
            className={`text-2xl font-black transition-opacity`}>¿Qué cepa deseas escanear?</motion.h3>
          <motion.input
            initial={{ opacity: 1, height: '3rem', margin: '1.25rem 0 0' }}
            animate={{
              opacity: image ? 0 : 1,
              height: image ? 0 : '3rem',
              margin: image ? 0 : '1.25rem 0 0',
            }}
            transition={{
              duration: 0.3,
              type: 'spring',
            }}
            className='outline-primary w-10/12 h-12 mt-3 px-4 rounded-2xl' type='text' />
          <motion.div
            style={{ width: '40%', height: '0.25rem', borderRadius: '1rem', padding: 0 }}
            animate={{
              borderRadius: '1.5rem',
              height: image ? 'auto' : '0.25rem',
              width: image ? '83.333333%' : '40%',
              padding: image ? '1rem' : 0,
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
              delay: 0.3,
            }}
            className='bg-white mt-3 text-start overflow-hidden'>
            <h1 className='text-xl'>Creo que:</h1>
            <div className='px-2'>
              <h2 className='text-lg'>Tipo de cultivo:</h2>
              <h2 className='text-lg'>Calificación:</h2>
            </div>
          </motion.div>
        </section>
        <section className='flex flex-col items-center justify-center min-h-[365px]'>
          <label onClick={() => setModal(!modal)}>
            <Camera className='text-white w-28 md:w-48 cursor-pointer' />
          </label>
          <input hidden onChange={(e) => handleImage(e)} type={'file'} accept={'.png, .jpg, .jpeg'} id='upload' />
          <h3 className='text-primary text-3xl font-black mt-8'>Toma una foto</h3>
        </section>
        <AnimatePresence initial={false}>
          <motion.section
            animate={{
              zIndex: modal ? 30 : -1,
              overflow: modal ? 'visible' : 'hidden'
            }}
            transition={{ delay: modal ? 0 : 0.3 }}
            className={`
            absolute inset-0
          `}
          >
            <motion.div
              animate={{
                opacity: modal ? 1 : 0,
                zIndex: modal ? 0 : -1,
              }}
              transition={{ duration: 0.3 }}
              className={`bg-black/80 absolute inset-0`}
            />
            <motion.label
              animate={{ translateY: modal ? '0' : '-100%' }}
              transition={{ duration: 0.3, type: 'spring' }}
              htmlFor='upload'
              className={`
                text-primary text-3xl py-4 font-black 
                cursor-pointer z-10 
                flex items-center justify-center 
                animate-pulse
              `}
            >
              Continuar <Arrow className='w-6' />
            </motion.label>
            <motion.div
              animate={{ translateY: modal ? '0' : '100vh' }}
              transition={{ duration: 0.3, type: 'spring' }}
              className={`
                bg-white px-4 pb-4 rounded-t-3xl 
                w-full min-h-full
                flex flex-col items-center
              `}
            >
              <button onClick={() => setModal(false)} className='w-full py-4'>
                <div className='bg-black h-1 w-2/5 rounded-full mx-auto' />
              </button>
              <h3 className='text-center text-lg font-black'>Recomendaciones para que podamos dar una mejor respuesta</h3>
              <ul className='list-outside list-disc ml-6 mt-4'>
                <li className='text-md font-black'>La imagen debe ser clara y nítida.</li>
                <li className='text-md font-black'>Contraste: la imagen debe tener un buen contraste entre la flor y el fondo.</li>
                <li className='text-md font-black'>La imagen debe ser tomada con buena iluminación.</li>
                <li className='text-md font-black'>La imagen debe estar enfocada.</li>
                <li className='text-md font-black'>La imagen debe estar en formato .jpg o .png.</li>
              </ul>
              <h3 className='text-center text-lg font-black mt-6'>La foto debera ser algo asi</h3>
              <div className='grid grid-cols-3 gap-1'>
                <Image
                  src={`/img1.png`}
                  alt={`Weedetection`}
                  width={120}
                  height={120}
                  className={'rounded-lg'}
                />
                <Image
                  src={`/img2.png`}
                  alt={`Weedetection`}
                  width={120}
                  height={120}
                  className={'rounded-lg'}
                />
                <Image
                  src={`/img3.png`}
                  alt={`Weedetection`}
                  width={120}
                  height={120}
                  className={'rounded-lg'}
                />
              </div>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  )
}
