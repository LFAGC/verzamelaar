import { AddVehicle } from '@/app/lib/advertisements/addvehicle'
import '../../styling/components/addvehicle.css'



export const AddVehicleMenu = function() {
    const addVehicleHandler = function() {

    }

    return(
        <div className="add-vehicle-menu-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className='add-vehicle-menu-inner-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <span className='add-vehicle-menu-title absolute'>Voertuig Plaatsen</span>

                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-merk' type='text' placeholder='Merk'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-model' type='text' placeholder='Model'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-type' type='text' placeholder='Type'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-prijs' type='number' placeholder='Prijs'></input>

                <div className='add-vehicle-menu-types'>
                    <span className='add-vehicle-menu-types-title'>Voertuig Specificaties</span>

                    <input className='relative add-vehicle-menu-type-input' type='number' placeholder='Kilometerstand'></input>
                    <input className='relative add-vehicle-menu-type-input' type='number' placeholder='Vermogen'></input>
                    <input className='relative add-vehicle-menu-type-input' type='text' placeholder='Brandstof'></input>
                </div>

                <div className='absolute add-vehicle-menu-button' onClick={addVehicleHandler}><span>Toevoegen</span></div>
            </div>
        </div>
    )
}