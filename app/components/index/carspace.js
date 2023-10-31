import { useEffect, useState } from 'react'
import '../../styling/components/carspace.css'
import Image from 'next/image'
import { supabase } from '@/app/lib/supabase/config'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react';

export const CarSpace = function() {
    const query = useSearchParams()
    const router = useRouter()

    const [allPosts, setPosts] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const temporaryPosts = []

    useEffect(() => {
        const getVehicles = async function() {
            const {data, error} = await supabase.from('Posts').select('*')

            setPosts(data)
        } 

        getVehicles()
    }, [])

    const checkSearchQueries = async function() {
        const SearchQuery = query.get('search')

        if (SearchQuery != null) {
            if (SearchQuery != '') {
                if (JSON.parse(SearchQuery)) {
                    const Make = (query.get('make')).toLowerCase()
                    const Model = (query.get('model')).toLowerCase()
                    const Type = (query.get('type')).toLowerCase()

                    const {data, error} = await supabase.from('Posts').select('*')

                    data.map((value, key) => {
                        if (Make != '' && Model != '' && Type != '') {
                            const PostMake = (value.postdata.make).toLowerCase()
                            const PostModel = (value.postdata.model).toLowerCase()
                            const PostType = (value.postdata.type).toLowerCase()

                            if (PostMake.includes(Make) && PostModel.includes(Model) && PostType.includes(Type)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Make != '' && Model) {
                            const PostMake = (value.postdata.make).toLowerCase()
                            const PostModel = (value.postdata.model).toLowerCase()

                            if (PostMake.includes(Make) && PostModel.includes(Model)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Type != '' && Model) {
                            const PostModel = (value.postdata.model).toLowerCase()
                            const PostType = (value.postdata.type).toLowerCase()

                            if (PostModel.includes(Model) && PostType.includes(Type)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Make != '' && Type != '') {
                            const PostMake = (value.postdata.make).toLowerCase()
                            const PostType = (value.postdata.type).toLowerCase()

                            if (PostType.includes(Type) && PostMake.includes(Make)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Make != '') {
                            const PostMake = (value.postdata.make).toLowerCase()

                            if (PostMake.includes(Make)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Model != '') {
                            const PostModel = (value.postdata.model).toLowerCase()
                            
                            if (PostModel.includes(Model)) {
                                temporaryPosts[key] = value
                            }
                        } else if (Type != '') {
                            const PostType = (value.postdata.type).toLowerCase()
                            
                            if (PostType.includes(Type)) {
                                temporaryPosts[key] = value
                            }
                        } else {
                            temporaryPosts[key] = value
                        }
                    })  
                    
                    setTimeout(function() {
                        setPosts(temporaryPosts)
                        router.push('?search=false')
                    }, 1000)
                        
                }
            }
        }
    }


    checkSearchQueries()

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