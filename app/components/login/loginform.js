// import '../../styling/components/pages/login.css'
"use client"

import '@/app/styling/pages/login.css'

export function LoginForm(Register) {
    let OnRegister = Register['Register']['Register']

    return( 
        <div className='login-form-container'>
            {OnRegister ? (
                <span className='login-form-big-text'>Registreer je account</span>
            ) : (
                <span className='login-form-big-text'>Log hier in...</span>
            )}
                

            <div className='login-form-input'>
                <span className='login-form-input-text'>Email</span>
                <input type='email'></input>
            </div>

            <div className='login-form-input'>
                <span className='login-form-input-text'>Wachtwoord</span>
                <input type='password'></input>
            </div>

            {!OnRegister ? (
                <span className='login-form-button'>Login</span>
            ) : (
                <span className='login-form-button'>Registreer</span>
            )}

            {OnRegister ? (
                <a className='login-form-small-text' href='./'>Al een account ? Klik hier.</a>
            ) : (
                <a className='login-form-small-text' href='./login/register'>Nog geen account ? Klik hier.</a>
            )}
                
            
        </div>
    )
}