import '../../styling/components/carspace.css'
import Image from 'next/image'

export const CarSpace = function() {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 carspace-container">
            <div className='carspace-slots'>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span>Audi RS6</span>
                </div>
            </div>
        </div>
    )
}