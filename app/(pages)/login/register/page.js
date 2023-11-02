import Login from "../page"

export const metadata = {
    title: 'Autoplaza.nl Registeer je hier!',
    description: '',
}


export default function Page() {
    return(
        <Login Register={true}/>
    )
}