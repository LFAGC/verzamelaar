import { AddVehicle } from '@/app/lib/advertisements/addvehicle'
import '../../styling/components/addvehicle.css'
import { useRouter} from 'next/navigation'



export const AddVehicleMenu = function() {
    const router = useRouter();

    const closeMenu = function() {
        router.push('/')
        router.refresh()
    }

    const addVehicleHandler = function() {
        const postData = {
            make :  document.getElementsByClassName('add-vehicle-menu-input-merk')[0].value,
            model : document.getElementsByClassName('add-vehicle-menu-input-model')[0].value,
            type : document.getElementsByClassName('add-vehicle-menu-input-type')[0].value,
            price : document.getElementsByClassName('add-vehicle-menu-input-prijs')[0].value,
            image : document.getElementsByClassName('add-vehicle-menu-input-image')[0].value,

            types : {
                milage : document.getElementsByClassName('add-vehicle-menu-type-input-stand')[0].value,
                horsepower : document.getElementsByClassName('add-vehicle-menu-type-input-vermogen')[0].value,
                fueltype : document.getElementsByClassName('add-vehicle-menu-type-input-brandstof')[0].value,
            }

            
        }

        AddVehicle(postData, router)
    }

    return(
        <div className="add-vehicle-menu-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className='add-vehicle-menu-inner-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute add-vehicle-menu-close' onClick={closeMenu}>X</div>
                <span className='add-vehicle-menu-title absolute'>Voertuig Plaatsen</span>

                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-merk' type='text' placeholder='Merk'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-model' type='text' placeholder='Model'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-type' type='text' placeholder='Type'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-prijs' type='number' placeholder='Prijs'></input>
                <input className='relative add-vehicle-menu-input add-vehicle-menu-input-image' type='text' placeholder='Afbeelding'></input>

                <div className='add-vehicle-menu-types'>
                    <span className='add-vehicle-menu-types-title'>Voertuig Specificaties</span>

                    <input className='relative add-vehicle-menu-type-input add-vehicle-menu-type-input-stand' type='number' placeholder='Kilometerstand'></input>
                    <input className='relative add-vehicle-menu-type-input add-vehicle-menu-type-input-vermogen' type='number' placeholder='Vermogen'></input>
                    <input className='relative add-vehicle-menu-type-input add-vehicle-menu-type-input-brandstof' type='text' placeholder='Brandstof'></input>
                </div>

                <div className='absolute add-vehicle-menu-button' onClick={addVehicleHandler}><span>Toevoegen</span></div>
            </div>
        </div>
    )
}