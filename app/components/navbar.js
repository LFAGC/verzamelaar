import '../styling/components/navbar.css'
import Image from 'next/image'

export function Navbar(Data) {
    return(
        <div className="navbar-container">
            <span className='navbar-title'>{Data.Name}</span>
            <div className='navbar-links'>
                <a className='navbar-link' href='?addvehicle=true'>Toevoegen</a>
                <a className='navbar-link' href='?profile=true'>Profiel</a>
            </div>
        </div>
    )
}