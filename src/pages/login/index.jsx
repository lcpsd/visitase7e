import { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Login(){

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {

        if(session){
            router.push('/dashboard')
        }

    }, [session])

    return(
        <div>
            <img src="/image/logo.png" alt="" />
            <p>Visita Se7e</p>
            <button onClick={() => signIn()}>Login</button>
        </div>
    )
}