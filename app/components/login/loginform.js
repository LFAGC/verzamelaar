"use client"

import { LoginUser } from '@/app/lib/login/login'
import { RegisterUser } from '@/app/lib/login/register'
import '@/app/styling/pages/login.css'

export function LoginForm(Register) {
    let OnRegister = Register['Register']['Register']

    const onSubmit = (e) => {
        e.preventDefault();

        if (OnRegister) {
            const formdata = new FormData(e.target);
            const data = Object.fromEntries(formdata.entries());

            const Email = data.email;
            const Password = data.password;

            const Registered = RegisterUser(Email, Password)

            if (Registered) {
                const LoggedIn = LoginUser(Email, Password)

                if (LoggedIn) {
                    console.log('Ingelogt')
                }
            } 
        } else {
            const formdata = new FormData(e.target);
            const data = Object.fromEntries(formdata.entries());
    
            const Email = data.email;
            const Password = data.password;
    
            const LoggedIn = LoginUser(Email, Password)

            if (LoggedIn) {
                console.log('Ingelogt')
            }
        }

    }

    return( 
        <div className='login-form-container'>
            <form onSubmit={onSubmit}>
                {OnRegister ? (
                    <span className='login-form-big-text'>Registreer je account</span>
                ) : (
                    <span className='login-form-big-text'>Log hier in...</span>
                )}
                
                <div className='login-form-input'>
                    <span className='login-form-input-text'>Email</span>
                    <input type='email' name='email' className='email'></input>
                </div>
                <div className='login-form-input'>
                    <span className='login-form-input-text'>Wachtwoord</span>
                    <input type='password' name='password' className='password'></input>
                </div>
                {!OnRegister ? (
                    <button type='submit' className='login-form-button'>Login</button>
                ) : (
                    <button type='submit' className='login-form-button'>Registreer</button>
                )}
                {OnRegister ? (
                    <a className='login-form-small-text' href='./'>Al een account ? Klik hier.</a>
                ) : (
                    <a className='login-form-small-text' href='./login/register'>Nog geen account ? Klik hier.</a>
                )}
                
                
            </form>
        </div>
    )
}