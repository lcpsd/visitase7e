import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Dashboard({SUPER_USER_EMAIL}){

    const { data: session } = useSession()
    const router = useRouter()

    // Checks admin E-mail
    useEffect(async () => {

        if(!session){
            router.push("/login")
        }

        if(session?.user.email && SUPER_USER_EMAIL){
            if(session.user.email !== SUPER_USER_EMAIL){
                await signOut()
                router.push("/login")
            }
        }
        
    }, [])
    
    return(
        <div>
            {JSON.stringify(session?.user, null, 2)}
            <button onClick={() => signOut()}>Sair</button>
        </div>
    )
}

export async function getServerSideProps(){
    return{
        props:{
            SUPER_USER_EMAIL: process.env.SUPER_USER_EMAIL
        }
    }
}