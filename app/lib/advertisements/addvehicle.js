import { returnUserId } from "../login/userhandler"
import { supabase } from "../supabase/config"

export const AddVehicle = async function(postData) {
    const currentDate = new Date().toDateString()

    const userid = await returnUserId()

    const {data, error} = await supabase
    .from('Posts').insert({userid : userid, postsreactions : {}, postdata : {}, postcaption : ''+postData.make+' '+postData.model+' '+postData.type+' | €'+postData.price+'', creationdate : currentDate})
}