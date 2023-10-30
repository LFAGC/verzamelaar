export const checkLoginState = function() {
    const State = sessionStorage.getItem('LoggedIn')
    const CheckState = JSON.parse(State)

    if (CheckState) {
        return true
    } else  {
        return false
    }
}

export const setCurrentUser = function(userData) {
    sessionStorage.setItem('LoggedIn', 'true')
    sessionStorage.setItem('CurrentData', JSON.stringify(userData))
}