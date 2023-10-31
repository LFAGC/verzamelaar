import '../../styling/components/profile.css'
import { useRouter} from 'next/navigation'
import { supabase } from '@/app/lib/supabase/config'
import { useState, useEffect } from 'react'
import { returnPostAmount, returnUserId, returnUserName } from '@/app/lib/login/userhandler'
import Image from 'next/image'

export const ProfilePage = function() {
    const router = useRouter()

    const closeMenu = function() {
        router.push('/')
        router.refresh()
    }

    const [allPosts, setPosts] = useState([])
    const [currentUserName, setCurrentUserName] = useState('')
    const [currentPostsAmount, setCurrentPostsAmount] = useState(0)

    useEffect(() => {
    
        const getVehicles = async function() {
            const currentUserId = await returnUserId()
            const username = await returnUserName()
            const postamount = await returnPostAmount()
            const {data, error} = await supabase.from('Posts').select('*').eq('userid', currentUserId)

            setPosts(data)
            setCurrentPostsAmount(postamount)
            setCurrentUserName(username)
        } 

        getVehicles()
    }, [])


    return(
        <div className="fixed profile-page-main-container w-full h-full top-0 left-0">
            <div className='absolute profile-page-menu-container left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute profile-page-menu-close' onClick={closeMenu}>X</div>

                <span className='absolute profile-page-title'>{currentUserName}</span>
                <span className='absolute profile-page-subtitle'>{currentPostsAmount} Posts</span>

                <div className='absolute profile-page-posts'>
                    {allPosts.map((value, index) => (
                        <div className='profile-slot' key={index}>
                            <Image className='profile-slot-image' width={1920} height={1080} src={value.postdata.image != '' ? (value.postdata.image) : ('/questionmark.png') } alt={value.postcaption} priority></Image>
                            <span className="profile-slot-vehicle-name">{value.postcaption}</span>
                            <div className='profile-slot-spec-sheet'>
                                <div className='profile-slot-spec'>
                                    <span className='profile-slot-spec-label'>Kilometerstand:</span>
                                    <span className='profile-slot-spec-data'>{value.postdata.types.milage} KM</span>
                                </div>
                                <div className='profile-slot-spec'>
                                    <span className='profile-slot-spec-label'>Vermogen:</span>
                                    <span className='profile-slot-spec-data'>{value.postdata.types.horsepower} PK</span>
                                </div>
                                <div className='profile-slot-spec'>
                                    <span className='profile-slot-spec-label'>Brandstof:</span>
                                    <span className='profile-slot-spec-data'>{value.postdata.types.fueltype}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}