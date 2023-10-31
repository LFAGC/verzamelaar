"use client"

import { supabase } from '@/app/lib/supabase/config'
import '../../styling/components/searchengine.css'
import { checkLoginState } from '@/app/lib/login/userhandler'
import { useRouter} from 'next/navigation'

export const SearchMachine = function() {
    const router = useRouter()

    const searchVehicles = async function() {
        const Make = document.getElementsByClassName('search-input-make')[0].value
        const Model = document.getElementsByClassName('search-input-model')[0].value 
        const Type = document.getElementsByClassName('search-input-type')[0].value

        router.push(`?search=true&make=${Make}&model=${Model}&type=${Type}`);
    }   

    return(
        <div className="relative left-1/2 -translate-x-1/2 searchengine-container">
            <span className='search-title'>Zoeken</span>

            <input className='search-input search-input-make' type='text' placeholder='Merk'></input>
            <input className='search-input search-input-model' type='text' placeholder='Model'></input>
            <input className='search-input search-input-type' type='text' placeholder='Uitvoering'></input>
            
            <span className='search-button' onClick={searchVehicles}>Zoeken</span>
        </div>
    )
}