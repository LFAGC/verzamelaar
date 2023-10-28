import { supabase } from "../supabase/config";
import StringCrypto from "string-crypto";
import { setCurrentUser } from "./userhandler";

export async function LoginUser(Email, Password) {
    const {
        decryptString,
    } = new StringCrypto();

    const {data, error} = await supabase
    .from('Users').select('*').eq('usermail', Email)

    const SelectedUser = data[0]
    
    if (SelectedUser != null) {
        const checkPass = decryptString(SelectedUser.password, Email)

        if (checkPass == Password) {
            setCurrentUser(SelectedUser)
            return true
        } else {
            return false
        }
    } else {
        return true
    }
 }