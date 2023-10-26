import { supabase } from "../supabase/config";
import StringCrypto from "string-crypto";

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
            return true
        } else {
            return false
        }
    } else {
        return true
    }
 }