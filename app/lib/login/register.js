import StringCrypto from "string-crypto";
import { supabase } from "../supabase/config";
 
export async function RegisterUser(Email, Password) {
    const {data, error} = await supabase
    .from('Users').select('*').eq('usermail', Email)

    const {
        encryptString,
    } = new StringCrypto();
    
    const currentDate = new Date().toDateString();

    if (data.length == 0) {
        const NewPass = encryptString(Password, Email)
        
        const {data, error} = await supabase
        .from('Users').insert({username : Email, usermail : Email, password : NewPass, creationdate : currentDate, postsamount : 0, userdata : {}})

        return true
    } else  {
        return false
    }
}