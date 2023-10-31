import { returnUserId } from "../login/userhandler"
import { supabase } from "../supabase/config"

export const AddVehicle = async function(postData, router) {
    const currentDate = new Date().toDateString()

    const userid = await returnUserId()

    const {error} = await supabase
    .from('Posts').insert({userid : userid, postreactions : {}, postdata : postData, postcaption : ''+postData.make+' '+postData.model+' '+postData.type+' | €'+postData.price+'', creationdate : currentDate})

    router.push('/')
}