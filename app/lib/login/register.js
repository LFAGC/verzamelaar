import { supabase } from "../supabase/config";
import simplecrypt from 'simplecrypt';

export async function RegisterUser(Email, Password) {
    const currentDate = new Date().toDateString();

    const {data, error} = await supabase
    .from('Users').insert({username : Email, usermail : Email, password : simplecrypt().encrypt(Password), creationdate : currentDate, postsamount : 0, userdata : {}})
}