"use client"

import { useState } from 'react'
import '../../styling/components/searchengine.css'
import { useRouter} from 'next/navigation'

export const SearchMachine = function() {

    const router = useRouter()
    const [isSearchbar, setSearchBar] =  useState(false)

    const searchVehicles = async function() {
        setSearchBar(!isSearchbar)

        const Make = document.getElementsByClassName('search-input-make')[0].value
        const Model = document.getElementsByClassName('search-input-model')[0].value 
        const Type = document.getElementsByClassName('search-input-type')[0].value

        router.push(`?search=true&make=${Make}&model=${Model}&type=${Type}`);
    }   

    const toggleSearchBar = function() {
        setSearchBar(!isSearchbar)
    }

    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className='absolute search-mobile-toggle' onClick={toggleSearchBar}><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className={`searchengine-container ${isSearchbar ? 'searchengine-toggle-mobile' : <></>}`}>
                <span className='search-title'>Zoeken</span>

                {isSearchbar ? <div className='search-bar-close-mobile' onClick={toggleSearchBar}>X</div> : <></>}

                <input className='search-input search-input-make' type='text' placeholder='Merk'></input>
                <input className='search-input search-input-model' type='text' placeholder='Model'></input>
                <input className='search-input search-input-type' type='text' placeholder='Uitvoering'></input>
                
                <span className='search-button' onClick={searchVehicles}>Zoeken</span>
            </div>
        </>
    )
}