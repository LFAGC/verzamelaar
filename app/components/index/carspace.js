import { useEffect, useState } from 'react'
import '../../styling/components/carspace.css'
import Image from 'next/image'
import { supabase } from '@/app/lib/supabase/config'

export const CarSpace = function() {
    const [allPosts, setPosts] = useState([])

    useEffect(() => {
    
        const getVehicles = async function() {
            const {data, error} = await supabase.from('Posts').select('*')

            setPosts(data)
        } 

        getVehicles()
    }, [])


    return (
        <div className="relative left-1/2 -translate-x-1/2 carspace-container">
            <div className='carspace-slots'>
            {allPosts.map((value, index) => (
                <div className='carspace-slot' key={index}>
                    <Image className='car-slot-image' width={1920} height={1080} src={value.postdata.image != '' ? (value.postdata.image) : ('/questionmark.png') } alt={value.postcaption} priority></Image>
                    <span className="car-slot-vehicle-name">{value.postcaption}</span>
                    <div className='car-slot-spec-sheet'>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Kilometerstand:</span>
                            <span className='car-slot-spec-data'>{value.postdata.types.milage} KM</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Vermogen:</span>
                            <span className='car-slot-spec-data'>{value.postdata.types.horsepower} PK</span>
                        </div>
                        <div className='car-slot-spec'>
                            <span className='car-slot-spec-label'>Brandstof:</span>
                            <span className='car-slot-spec-data'>{value.postdata.types.fueltype}</span>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}