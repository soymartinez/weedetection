"use client"

import Image from 'next/image'
import { Camera, Arrow, Cannabis } from 'components/icons'
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
        <section className={`bg-primary flex flex-col items-center text-center py-5 px-2 rounded-b-3xl`}>
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
              textAlign: 'center',
              width: '100%',
              margin: '0.5rem 0 0',
            }}
            animate={{
              fontSize: image ? '1.575rem' : '2.25rem',
              textAlign: image ? 'start' : 'center',
              width: image ? '83.333333%' : '100%',
              margin: image ? '1rem 0 0' : '0.5rem 0 0',
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
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
          <div className='w-full relative mt-3 flex flex-col justify-center items-center'>
            <motion.input
              initial={{ opacity: 1 }}
              animate={{
                opacity: image ? 0 : 1,
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
              }}
              className='outline-primary w-10/12 h-12 px-4 rounded-2xl' type='text' />
            <motion.div
              layout
              initial={{
                borderRadius: '1.5rem',
                height: '0.25rem',
                width: '40%',
                margin: '0.75rem 0 0',
              }}
              animate={{
                borderRadius: image ? '1.5rem' : 50,
                height: image ? 'auto' : '0.25rem',
                width: image ? '83.333333%' : '40%',
                margin: image ? 0 : '0.75rem auto 0',
                position: image ? 'absolute' : 'relative',
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
              }}
              className={`w-full inset-x-0 top-0 z-30 bg-white text-start overflow-hidden`}>
              <motion.div
                layout
                initial={{ padding: '1.5rem', height: 'inherit' }}
                className={`whitespace-nowrap`}
              >
                <h1 className='text-xl'>Creo que:</h1>
                <div className='px-2'>
                  <div className='-space-y-2'>
                    <h2 className='text-lg'>Tipo de cultivo:</h2>
                    <h2 className='text-lg text-primary'>Indoor</h2>
                  </div>
                  <div className='-space-y-1'>
                    <h2 className='text-lg'>Calificación:</h2>
                    <div className='flex gap-2 h-8'>
                      {[...Array(6)].map((_, i) => (
                        <Cannabis key={i} className={'text-primary w-8'} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className={`flex flex-col items-center relative ${image ? 'min-h-[465px] pt-32 justify-center' : 'min-h-[365px] justify-center'}`}>
          {preview ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                type: 'spring',
              }}
              className='flex flex-col items-center justify-center relative w-4/6'>
              <div className='absolute inset-y-5 z-20 rounded-full w-full h-1 bg-primary drop-shadow-[0_0_20px_#4cffa3] animate-scan-line' />
              <motion.img
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '300px' }}
                transition={{
                  duration: 0.8,
                  type: 'spring',
                }}
                className={`w-4/5 py-4 object-contain grayscale`} src={preview} />
              <div className='absolute w-4/5 top-0 overflow-hidden animate-scan'>
                <motion.img
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '300px' }}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                  }}
                  className={`object-contain py-4 mx-auto`} src={preview} />
              </div>
            </motion.div>
            : <>
              <label onClick={() => setModal(!modal)}>
                <Camera className='text-white w-28 md:w-48 cursor-pointer' />
              </label>
              <input hidden onChange={(e) => handleImage(e)} type={'file'} accept={'.png, .jpg, .jpeg'} id='upload' />
              <h3 className='text-primary text-3xl font-black mt-8'>Toma una foto</h3>
            </>
          }
        </section>
        <AnimatePresence initial={false}>
          <motion.section
            animate={{
              zIndex: modal ? 30 : -1,
              overflow: modal ? 'visible' : 'hidden'
            }}
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
