import '../../styling/components/carspace.css'
import Image from 'next/image'

export const CarSpace = function() {
    return (
        <div className="relative left-1/2 -translate-x-1/2 carspace-container">
            <div className='carspace-slots'>
                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span className="car-slot-vehicle-name">Audi RS6 | €130.000</span>
                    <div className='car-slot-spec-sheet'>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Kilometerstand:</span>
                            <span className='car-slot-spec-data'>1000 KM</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Vermogen:</span>
                            <span className='car-slot-spec-data'>650 PK</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Brandstof:</span>
                            <span className='car-slot-spec-data'>Benzine</span>
                        </div>
                    </div>
                </div>

                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span className="car-slot-vehicle-name">Audi RS6 | €130.000</span>
                    <div className='car-slot-spec-sheet'>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Kilometerstand:</span>
                            <span className='car-slot-spec-data'>1000 KM</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Vermogen:</span>
                            <span className='car-slot-spec-data'>650 PK</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Brandstof:</span>
                            <span className='car-slot-spec-data'>Benzine</span>
                        </div>
                    </div>
                </div>

                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span className="car-slot-vehicle-name">Audi RS6 | €130.000</span>
                    <div className='car-slot-spec-sheet'>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Kilometerstand:</span>
                            <span className='car-slot-spec-data'>1000 KM</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Vermogen:</span>
                            <span className='car-slot-spec-data'>650 PK</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Brandstof:</span>
                            <span className='car-slot-spec-data'>Benzine</span>
                        </div>
                    </div>
                </div>

                <div className='carspace-slot'>
                    <Image className='car-slot-image' width={1920} height={1080} src={'/audi-rs6-avant-2020-front.jpg'}></Image>
                    <span className="car-slot-vehicle-name">Audi RS6 | €130.000</span>
                    <div className='car-slot-spec-sheet'>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Kilometerstand:</span>
                            <span className='car-slot-spec-data'>1000 KM</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Vermogen:</span>
                            <span className='car-slot-spec-data'>650 PK</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Brandstof:</span>
                            <span className='car-slot-spec-data'>Benzine</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}