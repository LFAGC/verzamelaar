"use client"

import { Navbar } from '@/app/components/navbar'
import '../../styling/pages/index.css'
import { CarSpace } from '@/app/components/index/carspace'
import Image from 'next/image'
import { SearchMachine } from '@/app/components/index/searchmachine'
import { checkLoginState } from '@/app/lib/login/userhandler'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const func = async function() {
      const State = await checkLoginState();

      if (!State) {
        router.push('/login')
      }
    }

    func()
  }, [])

  return (
    <>
      <Image src={'/loginbg.jpg'} width={1920} height={1080} className='head-bg'></Image>
      <Navbar Name={'Hoofdpagina'}/>
      <SearchMachine/>
      <CarSpace/>
    </>
  )
}
