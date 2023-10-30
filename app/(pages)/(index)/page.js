"use client"

import { Navbar } from '@/app/components/navbar'
import '../../styling/pages/index.css'
import { CarSpace } from '@/app/components/index/carspace'
import Image from 'next/image'
import { SearchMachine } from '@/app/components/index/searchmachine'
import { checkLoginState } from '@/app/lib/login/userhandler'
import { useRouter, useSearchParams} from 'next/navigation'
import { useEffect, useState } from 'react'
import { AddVehicleMenu } from '@/app/components/index/addvehicle'

export default function Home() {
  const router = useRouter();
  const query = useSearchParams();
  const [isAddVehicleCalled, setAddVehicleState] = useState(true)

  useEffect(() => {
    const loginState = async function() {
      const State = await checkLoginState();

      if (!State) {
        router.push('/login')
      }
    }

    loginState()

    if (query.get('addvehicle') != '') {
      if (JSON.parse(query.get('addvehicle'))) {
        setAddVehicleState(true)
        console.log('mooi')
      } else {
        setAddVehicleState(false)
      }
    }
  }, [])



  return (
    <>
      <Image src={'/loginbg.jpg'} width={1920} height={1080} className='head-bg'></Image>
      <Navbar Name={'Hoofdpagina'}/>
      <SearchMachine/>
      <CarSpace/>

      {isAddVehicleCalled ? (<AddVehicleMenu/>) : (<></>)}
    </>
  )
}
