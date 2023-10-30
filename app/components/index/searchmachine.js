"use client"

import { supabase } from '@/app/lib/supabase/config'
import '../../styling/components/searchengine.css'
import { checkLoginState } from '@/app/lib/login/userhandler'

export const SearchMachine = function() {
    const searchVehicles = async function() {
        const AllPosts = await supabase.from('Posts').select('*')
    }   

    return(
        <div className="relative left-1/2 -translate-x-1/2 searchengine-container">
            <span className='search-title'>Zoeken</span>

            <input className='search-input' type='text' placeholder='Merk'></input>
            <input className='search-input' type='text' placeholder='Model'></input>
            <input className='search-input' type='text' placeholder='Uitvoering'></input>
            
            <span className='search-button' onClick={searchVehicles}>Zoeken</span>
        </div>
    )
}