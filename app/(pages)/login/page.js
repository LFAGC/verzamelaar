import '../../styling/pages/login.css'
import { LoginForm } from '@/app/components/login/loginform'
import { LoginSlideShow } from '@/app/components/login/loginslide'
import { LoginText } from '@/app/components/login/logintext'
import Image from 'next/image'

export const metadata = {
    title: 'Autoplaza.nl Log hier in!',
    description: '',
}


export default function Login(Register) {    
    return(
        <>
            <Image src={'/loginbg.jpg'} width={1920} height={1080} className='login-bg'></Image>
            <div className='w-3/5 h-full absolute top-0 left-1/2 -translate-x-1/2'>
                <LoginText/>
                <LoginForm Register={Register}/>
                <div className='login-middle-line'></div>
                <LoginSlideShow/>
            </div>
        </>
    )


}