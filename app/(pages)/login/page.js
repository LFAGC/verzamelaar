import { Navbar } from '@/app/components/navbar'
import '../../styling/pages/login.css'
import { LoginForm } from '@/app/components/login/loginform'
import { LoginSlideShow } from '@/app/components/login/loginslide'
import { LoginText } from '@/app/components/login/logintext'

export default function Home() {
    return(
        <>
            {/* <Navbar Name={'Login'}/> */}
            <div className='w-3/5 h-full absolute top-0 left-1/2 -translate-x-1/2'>
                <LoginText/>
                <LoginForm/>
                <div className='login-middle-line'></div>
                <LoginSlideShow/>
            </div>
        </>
    )
}