import { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import {AiOutlineGoogle} from 'react-icons/ai'
import styles from './styles.module.scss'

export default function Login(){

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {

        if(session){
            router.push('/dashboard')
        }

    }, [session])

    return(
        <div className={styles.login}>
            <div>
                <img src="/image/logo.png" alt="" />
                <span></span>
                <p>Visita Se7e</p>
            </div>

            <button onClick={() => signIn()}>
                <AiOutlineGoogle/>
            </button>

            <p>GOOGLE LOGIN</p>
        </div>
    )
}