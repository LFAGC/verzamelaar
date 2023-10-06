import '@/app/styling/pages/login.css'
import Image from 'next/image'

export function LoginSlideShow() {
    return(
        <div className='login-slide-container'>
            <Image className='login-slide-image' src={'/test.jpeg'} width={1920} height={1080}></Image>
        </div>
    )
}