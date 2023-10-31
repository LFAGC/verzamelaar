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
import { ProfilePage } from '@/app/components/index/profile'

export default function Home() {
  const router = useRouter();
  const query = useSearchParams();

  const [isAddVehicleCalled, setAddVehicleState] = useState(false)
  const [isProfileMenuCalled, setProfileMenuCalled] =  useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const loginState = async function() {
      const State = await checkLoginState();

      if (!State) {
        router.push('/login')
      } else {
        setLoggedIn(true)
      }
    }

    loginState()
  }, [])

  const checkQuerys = async function() {
    const AddVehicle = await query.get('addvehicle')
    const Profile = await query.get('profile')

    if (AddVehicle != '') {
      if (JSON.parse(AddVehicle)) {
        setAddVehicleState(true)
      } else {
        setAddVehicleState(false)
      }
    }

    if (Profile != '') {
      if (JSON.parse(Profile)) {
        setProfileMenuCalled(true)
      } else {
        setProfileMenuCalled(false)
      }
    }
  }


  checkQuerys()

  return (
    <>
      {isLoggedIn ?  (
        <>
          <Image src={'/loginbg.jpg'} width={1920} height={1080} className='head-bg'></Image>
          <Navbar Name={'Hoofdpagina'}/>
          <SearchMachine/>
          <CarSpace/>
          
          {isAddVehicleCalled ? (<AddVehicleMenu/>) : (<></>)}
          {isProfileMenuCalled ? (<ProfilePage/>) : (<></>)}
        </>
       ) : (<></>)}
    </>
  )
}
